import { getNewProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { DifferenceStrip } from "@/components/shop/DifferenceStrip";
import { DollWorldsBanner } from "@/components/shop/DollWorldsBanner";

export default function NewPage() {
  const products = getNewProducts();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 text-center sm:px-6">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">New Arrivals</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
          Fresh characters, outfits, and stories — just landed.
        </p>
      </div>

      <DifferenceStrip />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>

      <DollWorldsBanner />
    </div>
  );
}
