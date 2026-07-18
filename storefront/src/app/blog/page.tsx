import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { BRAND } from "@/lib/brand";

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div>
      <div className="relative flex h-[320px] items-end sm:h-[380px]">
        <Image src="/stock/blog-4.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(36,16,25,0.8)_0%,rgba(36,16,25,0.1)_100%)]" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-10 text-center sm:px-6">
          <p className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-brand-tint">{BRAND.name} Blog</p>
          <h1 className="mt-2 font-display text-3xl text-white sm:text-4xl">Stories, guides &amp; a little advice</h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl text-ink">Top articles</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link href={`/blog/${featured.slug}`} className="group">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src="/stock/blog-1.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-brand">{featured.tag}</p>
            <p className="mt-1 font-display text-2xl text-ink group-hover:text-brand transition-colors">
              {featured.title}
            </p>
            <p className="mt-2 text-ink-soft">{featured.blurb}</p>
          </Link>

          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image src={`/stock/blog-${i + 2}.jpg`} alt="" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand">{post.tag}</p>
                  <p className="mt-0.5 font-display text-base text-ink group-hover:text-brand transition-colors">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft line-clamp-2">{post.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-royal py-14 text-center text-cream">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="font-display text-2xl italic">{"“"}Every story, every girl.{"”"}</p>
          <Link
            href="/create-your-own"
            className="mt-6 inline-block rounded-full bg-brand px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-dark"
          >
            Design Your Own Story
          </Link>
        </div>
      </section>
    </div>
  );
}
