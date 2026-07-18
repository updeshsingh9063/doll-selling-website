import { getSaleProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { DifferenceStrip } from "@/components/shop/DifferenceStrip";

export default function SalePage() {
  const products = getSaleProducts();

  return (
    <div>
      <div className="bg-brand py-3 text-center text-sm font-bold text-white">
        Up to 35% off select items
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 text-center sm:px-6">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">Sale</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
          A few favorites at a friendlier price, while supplies last.
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
    </div>
  );
}
