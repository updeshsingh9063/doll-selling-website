"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-cream-raised p-3 shadow-soft transition-transform hover:-translate-y-0.5"
    >
      <div className="relative">
        <ProductArt
          category={product.category}
          swatch={product.swatch}
          badge={product.badge}
          image={product.image}
          className="aspect-square w-full"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setWished((v) => !v);
          }}
          aria-label={wished ? "Remove from wish list" : "Add to wish list"}
          aria-pressed={wished}
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-cream-raised/90 text-ink-soft shadow-soft transition-colors hover:text-brand"
        >
          <Heart size={16} fill={wished ? "currentColor" : "none"} className={wished ? "text-brand" : ""} />
        </button>
      </div>
      <div className="mt-3 flex flex-1 flex-col px-1 pb-1">
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted">{product.age}</p>
        <h3 className="mt-0.5 font-display text-base font-semibold text-ink group-hover:text-brand transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ink-soft line-clamp-2">{product.blurb}</p>
        <p className="mt-2 flex items-baseline gap-2 font-semibold text-ink tabular-nums">
          <span className={product.originalPrice ? "text-brand" : ""}>${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs font-normal text-muted line-through">${product.originalPrice}</span>
          )}
        </p>
      </div>
    </Link>
  );
}
