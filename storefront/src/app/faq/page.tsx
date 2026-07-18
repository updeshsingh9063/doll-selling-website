import { BRAND } from "@/lib/brand";

const FAQS: { id: string; q: string; a: string }[] = [
  {
    id: "shipping",
    q: "What are your shipping options?",
    a: "Standard shipping is free on orders of $175 or more. Orders under that ship for a flat $6.95 and typically arrive within 5–7 business days.",
  },
  {
    id: "returns",
    q: "What is your return policy?",
    a: "Items can be returned within 90 days of purchase with proof of purchase, for a refund or exchange.",
  },
  {
    id: "rewards",
    q: `How does ${BRAND.rewardsName} work?`,
    a: "Every account earns 1 point per $1 spent on merchandise (tax and shipping excluded). Points can be redeemed in your bag at checkout — up to 2,000 points for $100 off.",
  },
  {
    id: "create-your-own",
    q: "Can I change my doll's outfit after I order?",
    a: "Each Create Your Own doll ships exactly as designed. If you'd like a different outfit, you can always order additional outfits separately from the Outfits shop.",
  },
  {
    id: "account",
    q: "Do I need an account to order?",
    a: "This demo build doesn't include real checkout or accounts yet — your bag is saved locally in your browser so you can try the full flow.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-wide text-brand">Support</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Frequently asked questions
      </h1>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {FAQS.map((faq) => (
          <details key={faq.id} id={faq.id} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display font-semibold text-ink">
              {faq.q}
              <span className="ml-4 text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-ink-soft leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
