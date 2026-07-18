import { Star, Gift, Sparkles, Crown } from "lucide-react";
import { BRAND } from "@/lib/brand";

const TIERS = [
  {
    name: "Bloom",
    icon: Star,
    requirement: "Everyone starts here",
    perks: ["1 point per $1 spent", "Birthday surprise", "Member-only sales"],
  },
  {
    name: "Bramble",
    icon: Sparkles,
    requirement: "500+ points a year",
    perks: ["1.5 points per $1 spent", "Early access to new characters", "Free gift wrap"],
  },
  {
    name: "Evergreen",
    icon: Crown,
    requirement: "1,500+ points a year",
    perks: ["2 points per $1 spent", "Priority customer care", "A yearly surprise gift"],
  },
];

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-brand">Free to join</p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {BRAND.rewardsName}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Earn points on everything you buy, then redeem them for credit toward your next order — online
          or in store.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <div key={tier.name} className="rounded-2xl border border-line bg-cream-raised p-6 shadow-soft">
            <tier.icon className="text-brand" size={28} strokeWidth={1.6} />
            <h2 className="mt-3 font-display text-xl font-semibold text-ink">{tier.name}</h2>
            <p className="text-xs font-semibold text-muted">{tier.requirement}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span className="text-brand">•</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-4 rounded-2xl bg-gold-light px-6 py-6">
        <Gift className="shrink-0 text-gold" size={28} />
        <p className="text-sm text-ink-soft">
          Redeem up to <strong className="text-ink">2,000 points for $100 off</strong> a single order.
          Points never expire as long as your account stays active.
        </p>
      </div>
    </div>
  );
}
