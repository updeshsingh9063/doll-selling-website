"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";

export function AddToBagButton({
  slug,
  name,
  price,
}: {
  slug: string;
  name: string;
  price: number;
}) {
  const [added, setAdded] = useState(false);
  const addProduct = useCartStore((s) => s.addProduct);

  return (
    <button
      onClick={() => {
        addProduct({ slug, name, price });
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
      }}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:w-auto"
    >
      {added ? (
        <>
          <Check size={16} /> Added to bag
        </>
      ) : (
        "Add to Bag"
      )}
    </button>
  );
}
