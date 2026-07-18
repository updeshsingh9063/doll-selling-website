import Link from "next/link";
import { Camera, MessageCircle, Play, Music2 } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/brand";
import { Crest } from "@/components/brand/Crest";
import { NewsletterForm } from "./NewsletterForm";
import { Marquee } from "./Marquee";

const SOCIALS = [
  { Icon: Camera, label: "Photos" },
  { Icon: MessageCircle, label: "Community" },
  { Icon: Play, label: "Videos" },
  { Icon: Music2, label: "Sounds" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-brand text-cream">
      <Marquee text="Find your inner star" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-4 pb-10 text-center">
          <NewsletterForm />
          <p className="max-w-md text-[11px] text-cream/70">
            Be the first to know about new products, events, and special offers.
          </p>
        </div>

        <div className="flex justify-center gap-3 border-t border-cream/20 py-6">
          {SOCIALS.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream/85 transition-colors hover:border-cream hover:text-white"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-cream/20 py-8 sm:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-cream mb-3">{heading}</p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-cream/80 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-cream/20 pt-8 text-center">
          <Crest className="h-8 w-8 text-cream" />
          <p className="font-display text-sm italic text-cream">{BRAND.full}</p>
        </div>

        <p className="text-center text-xs text-cream/70 pt-6 border-t border-cream/20 mt-6">
          {BRAND.full} is an original, independent project — not affiliated with, endorsed by, or
          connected to Mattel, Inc. or American Girl®. Built for demonstration purposes.
        </p>
      </div>
    </footer>
  );
}
