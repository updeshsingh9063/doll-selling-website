export function ArchFrame({
  children,
  className = "",
  tone = "royal",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "royal" | "cream";
}) {
  const bg =
    tone === "royal"
      ? "bg-[linear-gradient(160deg,var(--color-royal-light),var(--color-royal))]"
      : "bg-[linear-gradient(160deg,var(--color-brand-light),var(--color-cream-raised))]";
  const border = tone === "royal" ? "border-white/50" : "border-brand";

  return (
    <div
      className={`relative flex items-end justify-center overflow-hidden rounded-t-full border-2 ${border} ${bg} ${className}`}
    >
      {children}
    </div>
  );
}
