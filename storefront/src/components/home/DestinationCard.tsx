import Link from "next/link";
import { Star } from "lucide-react";
import type { Destination } from "@/lib/story";
import { ArchFrame } from "./ArchFrame";
import { DestinationIcon } from "./DestinationIcons";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href="/shop/dolls" className="group flex w-36 shrink-0 flex-col items-center text-center sm:w-40">
      <div className="relative">
        <Star
          size={14}
          className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 text-white"
          fill="currentColor"
        />
        <ArchFrame className="h-44 w-32 pb-5 transition-transform group-hover:-translate-y-1 sm:h-48 sm:w-36">
          <DestinationIcon icon={destination.icon} className="h-12 w-12 text-white" />
        </ArchFrame>
      </div>
      <p className="mt-3 font-display text-xs tracking-[0.12em] text-white">
        {destination.name.toUpperCase()}
      </p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">Explore</p>
    </Link>
  );
}
