import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  MapPin,
  Palette,
  Scissors,
  Shirt,
  Gem,
  BookOpen,
  PawPrint,
  Sparkles,
  Tag,
  Star,
} from "lucide-react";
import { DollAvatar } from "@/components/doll/DollAvatar";
import type { DollConfig } from "@/components/doll/dollOptions";
import { DestinationCard } from "@/components/home/DestinationCard";
import { CategoryCircle } from "@/components/home/CategoryCircle";
import { PerfectDollAccordion } from "@/components/home/PerfectDollAccordion";
import { DollWorldsBanner } from "@/components/shop/DollWorldsBanner";
import { ProductCard } from "@/components/shop/ProductCard";
import { MEADOW, DESTINATIONS, COMPANION, BUILD_STEPS } from "@/lib/story";
import { BRAND } from "@/lib/brand";
import { PRODUCTS } from "@/lib/products";
import { BLOG_POSTS } from "@/lib/blog";

const MEADOW_HERO: DollConfig = {
  skin: "tan",
  hair: "chestnut",
  hairstyle: "braided-pigtails",
  eyes: "moss",
  outfit: "explorer-vest",
  glasses: false,
  name: "Meadow",
};

const PERFECT_DOLL_RAIL: { href: string; age: string; label: string; blurb: string; cta: string; config: DollConfig; image?: string }[] = [
  {
    href: "/product/little-sprout",
    age: "18m+",
    label: "Little Sprout",
    blurb: "The first American Doll for your littlest ones to love and nurture.",
    cta: "Shop Little Sprout",
    config: { skin: "fair", hair: "copper", hairstyle: "wavy-bob", eyes: "sky", outfit: "rainy-day-slicker", glasses: true, name: "" },
    image: "/dollfinder/bitty-baby.avif",
  },
  {
    href: "/create-your-own",
    age: "6+",
    label: "Create Your Own",
    blurb: "Choose the skin tone, hair, eyes, and outfit — build a doll that's entirely, truly yours.",
    cta: "Start Creating",
    config: { skin: "deep", hair: "raven", hairstyle: "long-straight", eyes: "amber", outfit: "starlight-parade", glasses: false, name: "" },
    image: "/dollfinder/truly-me.avif",
  },
  {
    href: "/product/meadow-the-explorer",
    age: "6+",
    label: "Meadow, the Explorer",
    blurb: "Field journal in hand, Meadow catalogues wildflowers on every hike.",
    cta: "Shop Meadow",
    config: MEADOW_HERO,
    image: "/dollfinder/ag-sisters.avif",
  },
  {
    href: "/product/rosalind-baker",
    age: "8+",
    label: "Doll of the Year",
    blurb: "This year's character is Rosalind, testing recipes for the county fair.",
    cta: "Meet Rosalind",
    config: { skin: "deep", hair: "raven", hairstyle: "long-straight", eyes: "hazel", outfit: "starlight-parade", glasses: false, name: "" },
    image: "/products/rosalind-baker.png",
  },
  {
    href: "/product/juniper-of-1912",
    age: "8+",
    label: "Historical Characters",
    blurb: "Juniper grew up above her family's print shop in 1912.",
    cta: "Shop Historical",
    config: { skin: "fair", hair: "honey", hairstyle: "wavy-bob", eyes: "hazel", outfit: "orchard-overalls", glasses: false, name: "" },
    image: "/products/juniper-of-1912.png",
  },
];

const ARTICLE_IMAGES: Record<string, string> = {
  "five-braid-styles": "/articles/hc-lhl.avif",
  "first-budget-lessons": "/articles/hc-plush.avif",
  "meet-rosalind": "/articles/goty-26.avif",
  "packing-for-a-sleepover": "/articles/bb-splash.avif",
};

const TOP_CATEGORIES = [
  { href: "/shop/dolls", label: "Dolls", image: "/products/category-dolls.png" },
  { href: "/shop/outfits", label: "Clothing", image: "/products/category-outfits.png" },
  { href: "/shop/accessories", label: "Accessories", image: "/products/category-accessories.png" },
  { href: "/shop/books", label: "Books", image: "/stock/category-books.jpg" },
  { href: "/new", label: "New In", image: null },
  { href: "/sale", label: "Sale", image: null },
];

const BESTSELLERS = PRODUCTS.filter((p) => p.badge === "Bestseller" || p.badge === "New").slice(0, 4);

const RETAIL_EXPERIENCES = [
  { title: "Dining", image: "/retail/dining.avif", body: "Enjoy meals that delight girls and grown-ups alike." },
  { title: "Salon", image: "/retail/salon.avif", body: "Add style and sparkle with complete services for girls and dolls." },
  { title: "In-Store Events", image: "/retail/events.avif", body: "Join the hands-on fun with birthday parties and more." },
  { title: "Styled by You", video: "/videos/styled-by-you.mp4", body: "Choose every detail, fresh outfits to accessories." },
];

const STORE_CITIES = ["Harborview", "Maple Ridge", "Sunridge", "Elm Crossing"];

const BUILD_ICONS = [Palette, Scissors, Shirt, Gem, BookOpen];

const CATEGORY_CIRCLES = [
  { href: "/shop/dolls", label: "Dolls", Icon: PawPrint },
  { href: "/shop/outfits", label: "Clothing", Icon: Shirt },
  { href: "/shop/accessories", label: "Accessories", Icon: Gem },
  { href: "/shop/books", label: "Books", Icon: BookOpen },
  { href: "/rewards", label: BRAND.rewardsName, Icon: Compass },
  { href: "/stores", label: "Stores", Icon: MapPin },
];

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative flex h-[560px] items-end overflow-hidden sm:h-[620px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/stock/hero-explorer.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(36,16,25,0.85)_0%,rgba(36,16,25,0.25)_55%,rgba(36,16,25,0.05)_100%)]" />
        <div className="animate-fade-up relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
          <p className="eyebrow flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-tint">
            <Sparkles size={14} /> Every child deserves to see herself in wonder
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl">
            Welcome to the fabulous world of {MEADOW.name}
          </h1>
          <p className="mt-4 max-w-md text-white/85">
            Follow {MEADOW.name}&apos;s adventures around the world while discovering dolls, outfits, and
            stories that celebrate every explorer&apos;s spirit.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/create-your-own"
              className="rounded-full bg-brand px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dark"
            >
              Begin the Journey
            </Link>
            <Link
              href="/shop/dolls"
              className="rounded-full border border-white/70 px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Find her perfect doll */}
      <section className="py-14">
        <h2 className="text-center font-display text-3xl text-brand">Find her perfect doll</h2>
        <p className="mt-1 text-center text-ink">Explore worlds of play for every age and stage</p>
        <PerfectDollAccordion items={PERFECT_DOLL_RAIL} />
        <div className="mt-8 hidden h-96 gap-0 sm:flex sm:justify-center sm:overflow-visible">
          {PERFECT_DOLL_RAIL.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex h-full w-36 shrink-0 flex-col overflow-hidden transition-[flex-grow,width] duration-500 ease-out sm:w-44 sm:flex-1 sm:hover:flex-[2.6] ${
                i % 2 === 0 ? "bg-brand-light" : "bg-cream"
              }`}
            >
              {/* decorative background stars, expanded state only */}
              <Star className="pointer-events-none absolute -left-6 top-4 hidden h-28 w-28 rotate-[-12deg] text-brand/10 sm:group-hover:block" fill="currentColor" />
              <Star className="pointer-events-none absolute bottom-8 left-20 hidden h-16 w-16 rotate-[8deg] text-brand/10 sm:group-hover:block" fill="currentColor" />

              <div className="relative z-10 flex h-full flex-col text-center sm:group-hover:flex-row sm:group-hover:items-center sm:group-hover:text-left">
                <div className="shrink-0 px-3 pt-8 sm:group-hover:w-[46%] sm:group-hover:px-8 sm:group-hover:pt-0">
                  <p className="font-display text-lg leading-tight text-brand">
                    <span className="sm:group-hover:border-b-2 sm:group-hover:border-brand sm:group-hover:pb-1">
                      {item.label}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink">For ages {item.age}</p>
                  <div className="hidden sm:group-hover:block">
                    <p className="mt-4 max-w-[24ch] text-sm text-ink-soft">{item.blurb}</p>
                    <span className="mt-5 inline-block whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark">
                      {item.cta}
                    </span>
                  </div>
                </div>

                <div className="relative mt-auto flex flex-1 items-end justify-center overflow-hidden sm:group-hover:mt-0 sm:group-hover:h-full sm:group-hover:w-[54%] sm:group-hover:flex-none sm:group-hover:items-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <DollAvatar
                      config={item.config}
                      className="h-[125%] w-auto transition-transform duration-300 sm:group-hover:h-[92%] sm:group-hover:scale-100"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Shop top categories */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <h2 className="text-center font-display text-2xl text-ink sm:text-3xl">Shop top categories</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8">
          {TOP_CATEGORIES.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group flex flex-col items-center gap-2.5">
              <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-line bg-brand-light transition-colors group-hover:border-brand sm:h-24 sm:w-24">
                {cat.image ? (
                  <Image src={cat.image} alt="" fill className="object-cover" />
                ) : cat.label === "Sale" ? (
                  <Tag className="text-brand" size={28} />
                ) : (
                  <Sparkles className="text-brand" size={28} />
                )}
              </span>
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft group-hover:text-brand">
                {cat.label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">Bestsellers</h2>
          <Link href="/shop/dolls" className="text-sm font-semibold text-brand hover:underline">
            Shop all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BESTSELLERS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Feature banner: Meadow's next adventure */}
      <section className="bg-brand-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 sm:px-6 lg:grid-cols-2">
          <div className="relative order-2 h-72 w-full lg:order-1 lg:h-[420px]">
            <Image src="/stock/feature-banner.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="order-1 px-6 py-12 text-center lg:order-2 lg:px-16 lg:text-left">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-brand">Charting her course</p>
            <h2 className="mt-2 font-display text-3xl text-ink">{MEADOW.name}&apos;s next adventure</h2>
            <p className="mt-3 max-w-md text-ink-soft">{MEADOW.bio}</p>
            <Link
              href="/product/meadow-the-explorer"
              className="mt-6 inline-block rounded-full bg-royal px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-brand"
            >
              Shop {MEADOW.name}&apos;s World
            </Link>
          </div>
        </div>
      </section>

      {/* Around the world */}
      <section className="bg-brand py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl text-white">Around the World with {MEADOW.name}</h2>
          <p className="mt-2 text-sm text-white/70">Every destination inspires a new collection</p>
          <div className="mt-10 flex gap-5 overflow-x-auto px-2 pb-4 sm:justify-center sm:px-0">
            {DESTINATIONS.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <DollWorldsBanner />

      {/* Share a day to remember */}
      <section className="bg-brand py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-display text-2xl italic text-white">{BRAND.name}</p>
          <h2 className="mt-1 font-display text-3xl text-white">Share a day to remember, forever</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {RETAIL_EXPERIENCES.map((exp) => (
              <div key={exp.title} className="overflow-hidden rounded-2xl bg-white/10 text-left">
                <div className="relative h-32 w-full sm:h-40">
                  {exp.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    >
                      <source src={exp.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={exp.image!} alt="" fill className="object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <p className="font-display text-sm text-white">{exp.title}</p>
                  <p className="mt-1 text-[11px] text-white/70">{exp.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-wide text-white/70">Book a reservation now</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {STORE_CITIES.map((city) => (
                <Link
                  key={city}
                  href="/stores"
                  className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-2xl text-ink sm:text-3xl">Latest articles</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={ARTICLE_IMAGES[post.slug]}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-brand">{post.tag}</p>
              <p className="mt-0.5 font-display text-base text-ink group-hover:text-brand">{post.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Build your dream doll */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-line bg-cream-raised px-6 py-12 shadow-soft sm:px-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-brand">Build Your Dream Doll</p>
            <h2 className="mt-2 font-display text-3xl text-ink">
              Create a one-of-a-kind doll
              <br /> who looks like you and tells your story
            </h2>
            <Link
              href="/create-your-own"
              className="mt-7 inline-block rounded-full bg-brand px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dark"
            >
              Build Your Doll
            </Link>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-56 w-44 overflow-hidden rounded-full border-2 border-brand bg-brand-light">
              <Image src="/dollfinder/truly-me-longhair.avif" alt="" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {BUILD_STEPS.map((step, i) => {
                const Icon = BUILD_ICONS[i];
                return (
                  <div key={step.label} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                      <Icon size={20} />
                    </span>
                    <p className="max-w-[9ch] text-[10px] font-bold uppercase tracking-wide text-ink-soft">
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the companion */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-brand-light px-6 py-10 sm:px-12 lg:grid-cols-[auto_1fr_auto]">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-brand bg-cream-raised shadow-soft">
            <PawPrint size={48} className="text-brand" strokeWidth={1.3} />
          </div>
          <div className="text-center lg:text-left">
            <p className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Meet {COMPANION.name}
            </p>
            <h2 className="mt-1 font-display text-2xl text-ink">{COMPANION.name}, {COMPANION.species}</h2>
            <p className="mt-2 max-w-md text-ink-soft">{COMPANION.bio}</p>
            <Link
              href="/shop/accessories"
              className="mt-5 inline-block rounded-full bg-royal px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-brand"
            >
              Shop {COMPANION.name}&apos;s Gear
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center lg:grid-cols-1">
            {COMPANION.features.map((f) => (
              <div key={f.title}>
                <p className="text-xs font-bold uppercase tracking-wide text-ink">{f.title}</p>
                <p className="mt-0.5 text-[11px] text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why parents love us */}
      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl text-ink">Why Parents Love Us</h2>
          <p className="mt-2 text-sm text-ink-soft">Loved by parents for premium quality, cherished by kids for magical play</p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-8">
            {CATEGORY_CIRCLES.map((c) => (
              <CategoryCircle key={c.href} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Room to grow / closing CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Room to grow</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          {BRAND.name} dolls are designed for every age and stage — crafted with care to be loved for
          generations to come.
        </p>
        <Link
          href="/create-your-own"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-brand"
        >
          Design Yours <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
