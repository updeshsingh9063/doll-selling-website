import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const index = BLOG_POSTS.findIndex((p) => p.slug === slug);

  return (
    <article>
      <div className="relative h-64 w-full sm:h-80">
        <Image src={`/stock/blog-${index + 1}.jpg`} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(36,16,25,0.75)_0%,rgba(36,16,25,0.1)_100%)]" />
      </div>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <Link href="/blog" className="text-sm font-semibold text-brand hover:underline">
          ← Blog
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-wide text-brand">{post.tag}</p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink">{post.title}</h1>
        <p className="mt-6 leading-relaxed text-ink-soft">{post.body}</p>
      </div>
    </article>
  );
}
