import Image from "next/image";
import { BRAND } from "@/lib/brand";

const ITEMS = [
  { icon: "/icons/icon-quality.png", label: "Crafted to last" },
  { icon: "/icons/icon-rewards.png", label: `${BRAND.rewardsName} points on every order` },
  { icon: "/icons/icon-care.png", label: "Free doll hair care guide" },
  { icon: "/icons/icon-book.png", label: "A storybook with every character" },
  { icon: "/icons/icon-store.png", label: "Real stores to visit" },
];

export function DifferenceStrip() {
  return (
    <div className="bg-royal py-8 text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-5 sm:gap-6 sm:px-6">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-light">
              <Image src={item.icon} alt="" width={32} height={32} className="h-7 w-7" />
            </span>
            <p className="text-xs font-semibold text-cream/85 leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
