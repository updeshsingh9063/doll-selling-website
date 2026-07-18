import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProductBySlug, CATEGORY_LABELS } from "@/lib/products";
import { DOLL_CHARACTERS } from "@/lib/dollCharacters";
import { ProductArt } from "@/components/shop/ProductArt";
import { DollAvatar } from "@/components/doll/DollAvatar";
import { AddToBagButton } from "@/components/shop/AddToBagButton";
import { ProductCard } from "@/components/shop/ProductCard";
import { DifferenceStrip } from "@/components/shop/DifferenceStrip";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  const dollConfig = DOLL_CHARACTERS[product.slug];

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <nav className="text-sm text-muted">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-brand">
            {CATEGORY_LABELS[product.category]}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{product.name}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {product.image ? (
            <ProductArt
              category={product.category}
              swatch={product.swatch}
              badge={product.badge}
              image={product.image}
              className="aspect-square w-full"
            />
          ) : dollConfig ? (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-brand-light">
              <DollAvatar config={dollConfig} className="h-[85%] w-auto" />
            </div>
          ) : (
            <ProductArt
              category={product.category}
              swatch={product.swatch}
              badge={product.badge}
              className="aspect-square w-full"
            />
          )}

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">
              Ages {product.age}
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold text-ink">{product.name}</h1>
            <p className="mt-3 flex items-baseline gap-2 font-display text-2xl font-semibold tabular-nums">
              <span className={product.originalPrice ? "text-brand" : "text-ink"}>${product.price}</span>
              {product.originalPrice && (
                <span className="text-base font-normal text-muted line-through">${product.originalPrice}</span>
              )}
            </p>
            <p className="mt-5 max-w-prose text-ink-soft leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <AddToBagButton slug={product.slug} name={product.name} price={product.price} />
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="font-semibold text-ink">Shipping</dt>
                <dd className="text-ink-soft">Free over $175</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Returns</dt>
                <dd className="text-ink-soft">90 days, no questions asked</dd>
              </div>
            </dl>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-ink">You might also like</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-16">
        <DifferenceStrip />
      </div>
    </div>
  );
}
