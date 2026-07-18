function Segment({ text }: { text: string }) {
  return (
    <span className="flex shrink-0 items-center gap-3 px-3 font-display text-sm italic tracking-wide text-cream/90">
      {text}
      <span aria-hidden className="text-brand-tint">✶</span>
    </span>
  );
}

export function Marquee({ text }: { text: string }) {
  const segments = Array.from({ length: 8 });
  return (
    <div className="overflow-hidden border-b border-cream/20 py-2.5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {segments.map((_, i) => (
          <Segment key={i} text={text} />
        ))}
        {segments.map((_, i) => (
          <Segment key={`b-${i}`} text={text} />
        ))}
      </div>
    </div>
  );
}
