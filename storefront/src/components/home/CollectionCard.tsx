import Link from "next/link";
import { DollAvatar } from "@/components/doll/DollAvatar";
import type { DollConfig } from "@/components/doll/dollOptions";

const TONE_BG: Record<string, string> = {
  brand: "bg-[linear-gradient(165deg,#f7edd2,#eeddac)]",
  sage: "bg-[linear-gradient(165deg,#e1ede7,#bfe0d0)]",
  royal: "bg-[linear-gradient(165deg,#46316f,#2c1b4a)]",
};

export function CollectionCard({
  href,
  name,
  collection,
  tone,
  config,
}: {
  href: string;
  name: string;
  collection: string;
  tone: "brand" | "sage" | "royal";
  config: DollConfig;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line shadow-soft transition-transform hover:-translate-y-1"
    >
      <div className={`relative flex flex-1 items-end justify-center pt-8 ${TONE_BG[tone]}`}>
        <DollAvatar config={config} className="h-56 w-auto drop-shadow-sm" />
      </div>
      <div className="bg-royal px-4 py-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Collection</p>
        <p className="mt-1 font-display text-base tracking-wide text-cream group-hover:text-brand transition-colors">
          {name}
        </p>
      </div>
    </Link>
  );
}
