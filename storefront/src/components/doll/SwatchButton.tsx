export function SwatchButton({
  color,
  label,
  selected,
  onClick,
}: {
  color: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={label}
      title={label}
      className={`relative h-11 w-11 shrink-0 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        selected ? "scale-105" : "hover:scale-105"
      }`}
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)" }}
      />
      {selected && (
        <span className="absolute -inset-1 rounded-full ring-2 ring-brand ring-offset-2 ring-offset-cream-raised" />
      )}
    </button>
  );
}

export function OptionPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        selected
          ? "border-brand bg-brand text-white"
          : "border-line bg-cream-raised text-ink-soft hover:border-brand hover:text-brand"
      }`}
    >
      {label}
    </button>
  );
}
