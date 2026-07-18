import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DollConfig } from "@/components/doll/dollOptions";

export type CartLine = {
  id: string;
  kind: "product" | "custom-doll";
  name: string;
  price: number;
  quantity: number;
  detail?: string;
  dollConfig?: DollConfig;
};

type CartState = {
  lines: CartLine[];
  addProduct: (args: { slug: string; name: string; price: number }) => void;
  addCustomDoll: (args: { config: DollConfig; price: number }) => void;
  removeLine: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      addProduct: ({ slug, name, price }) => {
        set((state) => {
          const existing = state.lines.find((l) => l.id === slug);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.id === slug ? { ...l, quantity: l.quantity + 1 } : l
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              { id: slug, kind: "product", name, price, quantity: 1 },
            ],
          };
        });
      },
      addCustomDoll: ({ config, price }) => {
        const id = `custom-${Date.now()}`;
        set((state) => ({
          lines: [
            ...state.lines,
            {
              id,
              kind: "custom-doll",
              name: config.name ? `${config.name} (Create Your Own)` : "Create Your Own Doll",
              price,
              quantity: 1,
              dollConfig: config,
            },
          ],
        }));
      },
      removeLine: (id) =>
        set((state) => ({ lines: state.lines.filter((l) => l.id !== id) })),
      setQuantity: (id, quantity) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.id === id ? { ...l, quantity } : l))
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: () => get().lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    }),
    { name: "trueheart-cart" }
  )
);
