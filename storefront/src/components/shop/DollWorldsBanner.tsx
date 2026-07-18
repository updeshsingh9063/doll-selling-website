import Link from "next/link";
import Image from "next/image";

const WORLDS = [
  { age: "18m+", image: "/dollfinder/bitty-baby.avif" },
  { age: "4+", image: "/dollfinder/ag-sisters.avif" },
  { age: "6+", image: "/dollfinder/truly-me.avif" },
  { age: "8+", image: "/dollfinder/truly-me-longhair.avif" },
];

export function DollWorldsBanner() {
  return (
    <section className="bg-brand-light py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Explore our doll worlds</h2>
        <p className="mt-2 text-ink-soft">Select an age to start exploring</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {WORLDS.map(({ age }) => (
            <Link
              key={age}
              href="/shop/dolls"
              className="rounded-full border border-brand px-5 py-2 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Ages {age}
            </Link>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6">
          {WORLDS.map(({ age, image }) => (
            <Link
              key={age}
              href="/shop/dolls"
              className="relative aspect-square overflow-hidden rounded-2xl bg-cream-raised shadow-soft transition-transform hover:-translate-y-1"
            >
              <Image src={image} alt="" fill className="object-cover object-top" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
