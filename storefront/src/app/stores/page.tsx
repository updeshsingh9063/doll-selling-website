import { MapPin, Scissors, Cake, Sparkles } from "lucide-react";

const STORES = [
  { city: "Harborview", region: "Coastal flagship" },
  { city: "Maple Ridge", region: "Midwest flagship" },
  { city: "Sunridge", region: "West Coast flagship" },
  { city: "Elm Crossing", region: "Southern flagship" },
];

const EXPERIENCES = [
  { icon: Scissors, title: "Salon", body: "A quick style refresh for your doll's hair." },
  { icon: Cake, title: "Café", body: "Seating for two — and a doll-sized chair for a friend." },
  { icon: Sparkles, title: "Studio", body: "Walk-in outfit and accessory styling, no appointment needed." },
];

export default function StoresPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-wide text-brand">Visit us</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink sm:text-4xl">Find a store</h1>
      <p className="mt-3 max-w-xl text-ink-soft">
        Four flagship locations with a café, salon, and styling studio — plus everything in the shop.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {STORES.map((store) => (
          <div
            key={store.city}
            className="flex items-center gap-4 rounded-2xl border border-line bg-cream-raised p-5 shadow-soft"
          >
            <MapPin className="shrink-0 text-brand" size={22} />
            <div>
              <p className="font-display font-semibold text-ink">{store.city}</p>
              <p className="text-sm text-muted">{store.region}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">In-store experiences</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {EXPERIENCES.map((exp) => (
          <div key={exp.title} className="rounded-2xl bg-sage-light p-6">
            <exp.icon className="text-sage" size={26} />
            <p className="mt-3 font-display font-semibold text-ink">{exp.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{exp.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
