"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Star } from "lucide-react";
import { DollAvatar } from "@/components/doll/DollAvatar";
import type { DollConfig } from "@/components/doll/dollOptions";

export type PerfectDollItem = {
  href: string;
  age: string;
  label: string;
  blurb: string;
  cta: string;
  config: DollConfig;
  image?: string;
};

export function PerfectDollAccordion({ items }: { items: PerfectDollItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 flex flex-col sm:hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isPink = i % 2 === 0;

        return (
          <div key={item.href} className={`relative overflow-hidden ${isPink ? "bg-brand-light" : "bg-cream"}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-4 py-3 text-left"
            >
              <div className="min-w-0 flex-1">
                <p className="font-display text-base leading-tight text-brand">{item.label}</p>
                <p className="text-xs text-ink">For ages {item.age}</p>
              </div>

              {!isOpen && (
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  {item.image ? (
                    <Image src={item.image} alt="" fill className="object-cover object-top" />
                  ) : (
                    <DollAvatar config={item.config} className="absolute bottom-[-10px] left-1/2 h-[150%] w-auto -translate-x-1/2" />
                  )}
                </div>
              )}

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            {isOpen && (
              <div className="animate-fade-up relative flex items-center gap-4 px-4 pb-6">
                <Star className="pointer-events-none absolute -left-4 top-0 h-20 w-20 rotate-[-12deg] text-brand/10" fill="currentColor" />
                <Star className="pointer-events-none absolute bottom-2 left-16 h-12 w-12 rotate-[8deg] text-brand/10" fill="currentColor" />

                <div className="relative z-10 min-w-0 flex-1">
                  <p className="max-w-[22ch] text-sm text-ink-soft">{item.blurb}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-block whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                  >
                    {item.cta}
                  </Link>
                </div>
                <div className="relative z-10 h-40 w-32 shrink-0 overflow-hidden rounded-xl">
                  {item.image ? (
                    <Image src={item.image} alt="" fill className="object-cover object-top" />
                  ) : (
                    <DollAvatar config={item.config} className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2" />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
