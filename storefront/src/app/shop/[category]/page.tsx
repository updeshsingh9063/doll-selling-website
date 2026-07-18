import { notFound } from "next/navigation";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { CATEGORY_LABELS, getProductsByCategory, type Category } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { DifferenceStrip } from "@/components/shop/DifferenceStrip";
import { DollWorldsBanner } from "@/components/shop/DollWorldsBanner";

const VALID_CATEGORIES: Category[] = ["dolls", "outfits", "accessories", "books"];

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as Category)) {
    notFound();
  }
  const typedCategory = category as Category;
  const products = getProductsByCategory(typedCategory);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 text-center sm:px-6">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{CATEGORY_LABELS[typedCategory]}</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
          Discover worlds of joy for every age and stage of childhood.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between border-y border-line px-4 py-3 sm:px-6">
        <button className="flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-brand">
          <SlidersHorizontal size={15} /> Filter
        </button>
        <p className="text-sm text-muted">{products.length} items</p>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-brand">
          Sort by <ChevronDown size={15} />
        </button>
      </div>

      <DifferenceStrip />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>

      <DifferenceStrip />
      <DollWorldsBanner />
    </div>
  );
}
