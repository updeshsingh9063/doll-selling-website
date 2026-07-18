import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function CategoryCircle({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <Link href={href} className="group flex flex-col items-center gap-3 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-brand/50 text-brand transition-colors group-hover:bg-brand group-hover:text-royal">
        <Icon size={28} strokeWidth={1.4} />
      </span>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</p>
    </Link>
  );
}
