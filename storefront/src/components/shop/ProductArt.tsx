import Image from "next/image";
import { Baby, Shirt, Gem, BookOpen } from "lucide-react";
import type { Category } from "@/lib/products";

const SWATCH_CLASSES: Record<string, { bg: string; ring: string; icon: string }> = {
  brand: { bg: "bg-brand-light", ring: "ring-brand-tint", icon: "text-brand" },
  gold: { bg: "bg-gold-light", ring: "ring-gold-light", icon: "text-gold" },
  sage: { bg: "bg-sage-light", ring: "ring-sage-light", icon: "text-sage" },
};

const CATEGORY_ICON: Record<Category, typeof Baby> = {
  dolls: Baby,
  outfits: Shirt,
  accessories: Gem,
  books: BookOpen,
};

export function ProductArt({
  category,
  swatch,
  badge,
  image,
  className = "",
}: {
  category: Category;
  swatch: string;
  badge?: string;
  image?: string;
  className?: string;
}) {
  const tones = SWATCH_CLASSES[swatch] ?? SWATCH_CLASSES.brand;
  const Icon = CATEGORY_ICON[category];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${tones.bg} ${className}`}
    >
      {image ? (
        <Image src={image} alt="" fill className="object-cover" />
      ) : (
        <>
          <div
            className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${tones.bg} ring-8 ${tones.ring} opacity-60`}
          />
          <div
            className={`absolute -left-8 -bottom-8 h-28 w-28 rounded-full ${tones.bg} ring-8 ${tones.ring} opacity-40`}
          />
          <Icon size={56} strokeWidth={1.4} className={`relative ${tones.icon}`} />
        </>
      )}
      {badge && (
        <span className="absolute top-3 left-3 rounded-full bg-ink/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cream">
          {badge}
        </span>
      )}
    </div>
  );
}
