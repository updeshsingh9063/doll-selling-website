"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Search, UserCircle2, Heart } from "lucide-react";
import { BRAND, NAV_LINKS, UTILITY_LINKS, PROMO_MESSAGE } from "@/lib/brand";
import { useCartStore } from "@/lib/store/cart";
import { Crest } from "@/components/brand/Crest";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const storeCount = useCartStore((s) => s.count());
  const count = mounted ? storeCount : 0;
  const pathname = usePathname();

  // The cart is persisted to localStorage, which isn't available during SSR.
  // Rendering the real count only after mount keeps the server/client markup in sync.
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-brand text-cream sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[11px] font-semibold">
          <div className="flex gap-4">
            {UTILITY_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="opacity-90 hover:opacity-100 hover:underline">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="opacity-95">{PROMO_MESSAGE}</p>
          <div className="flex gap-4">
            <Link href="/account" className="opacity-90 hover:opacity-100 hover:underline">
              Sign in or join
            </Link>
            <Link href="/cart" className="opacity-90 hover:opacity-100 hover:underline">
              Wish list
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-cream-raised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-[4.5rem] items-center justify-between gap-4 py-2.5">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Crest className="h-9 w-9 text-brand" />
              <span className="font-display text-xl italic font-semibold text-ink">{BRAND.name}</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive ? "text-brand" : "text-ink-soft hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1">
              <button
                aria-label="Search"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:text-brand transition-colors"
              >
                <Search size={19} />
              </button>
              <Link
                href="/account"
                aria-label="Account"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:text-brand transition-colors"
              >
                <UserCircle2 size={20} />
              </Link>
              <button
                aria-label="Wish list"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:text-brand transition-colors"
              >
                <Heart size={19} />
              </button>
              <Link
                href="/cart"
                aria-label={`Bag, ${count} item${count === 1 ? "" : "s"}`}
                className="relative flex items-center justify-center h-10 w-10 rounded-full text-ink-soft hover:text-brand transition-colors"
              >
                <ShoppingBag size={19} />
                {count > 0 && (
                  <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white tabular-nums">
                    {count}
                  </span>
                )}
              </Link>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full text-ink-soft hover:text-brand transition-colors"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-b border-line bg-cream-raised px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-semibold text-ink-soft hover:bg-brand-light hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
