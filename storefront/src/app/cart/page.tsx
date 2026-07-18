"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { DollAvatar } from "@/components/doll/DollAvatar";

export default function CartPage() {
  const lines = useCartStore((s) => s.lines);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeLine = useCartStore((s) => s.removeLine);
  const subtotal = useCartStore((s) => s.subtotal());

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold text-ink">Your bag is empty</h1>
        <p className="mt-2 text-ink-soft">Let&apos;s find her a friend.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/create-your-own"
            className="rounded-full bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark"
          >
            Create Your Own
          </Link>
          <Link
            href="/shop/dolls"
            className="rounded-full border border-line px-5 py-3 text-sm font-bold text-ink hover:border-brand hover:text-brand"
          >
            Shop dolls
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink">Your Bag</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-line">
          {lines.map((line) => (
            <li key={line.id} className="flex gap-4 py-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-brand-light">
                {line.kind === "custom-doll" && line.dollConfig ? (
                  <DollAvatar config={line.dollConfig} className="h-full w-auto" />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-brand-tint" />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="font-display font-semibold text-ink">{line.name}</p>
                  {line.dollConfig && (
                    <p className="text-xs text-muted">
                      {line.dollConfig.outfit.replace(/-/g, " ")} · {line.dollConfig.hairstyle.replace(/-/g, " ")}
                    </p>
                  )}
                  <p className="mt-1 font-semibold text-ink tabular-nums">${line.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity(line.id, line.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center text-ink-soft hover:text-brand"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm tabular-nums">{line.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => setQuantity(line.id, line.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center text-ink-soft hover:text-brand"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    aria-label="Remove item"
                    onClick={() => removeLine(line.id)}
                    className="flex h-8 w-8 items-center justify-center text-muted hover:text-brand"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="h-fit rounded-2xl border border-line bg-cream-raised p-6 shadow-soft">
          <h2 className="font-display text-lg font-semibold text-ink">Summary</h2>
          <div className="mt-4 flex justify-between text-sm text-ink-soft">
            <span>Subtotal</span>
            <span className="tabular-nums">${subtotal}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-ink-soft">
            <span>Shipping</span>
            <span>{subtotal >= 175 ? "Free" : "Calculated at checkout"}</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg font-semibold text-ink">
            <span>Total</span>
            <span className="tabular-nums">${subtotal}</span>
          </div>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-dark">
            Checkout <ArrowRight size={16} />
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Demo project — checkout is not wired to real payments.
          </p>
        </div>
      </div>
    </div>
  );
}
