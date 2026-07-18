import type { Destination } from "@/lib/story";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Leaf() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <path d="M20 34 C10 30, 6 18, 12 8 C22 6, 32 12, 32 22 C32 30, 26 34, 20 34 Z" />
      <path d="M20 33 C18 24, 18 15, 24 8" />
    </svg>
  );
}

function Dune() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <circle cx="28" cy="11" r="4" />
      <path d="M4 28 C10 20, 16 20, 20 26 C24 32, 30 22, 36 26" />
      <path d="M4 32 C12 26, 20 26, 26 31 C30 34, 33 30, 36 32" />
    </svg>
  );
}

function Torii() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <path d="M6 12 L34 12" />
      <path d="M4 17 L36 17" />
      <path d="M12 17 L12 34" />
      <path d="M28 17 L28 34" />
    </svg>
  );
}

function Thistle() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <path d="M20 34 L20 18" />
      <path d="M14 24 C16 22, 24 22, 26 24" />
      <circle cx="20" cy="13" r="6" />
      <path d="M12 9 L16 11 M28 9 L24 11 M20 3 L20 7" />
    </svg>
  );
}

function Peak() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <path d="M4 30 L15 12 L22 22 L27 15 L36 30 Z" />
      <path d="M12 22 L18 22 M24 20 L29 20" />
    </svg>
  );
}

function Wave() {
  return (
    <svg viewBox="0 0 40 40" {...common}>
      <path d="M4 16 C9 11, 13 11, 18 16 C23 21, 27 21, 32 16" />
      <path d="M4 24 C9 19, 13 19, 18 24 C23 29, 27 29, 32 24" />
      <circle cx="30" cy="10" r="2.4" />
    </svg>
  );
}

const ICONS: Record<Destination["icon"], () => React.JSX.Element> = {
  leaf: Leaf,
  dune: Dune,
  torii: Torii,
  thistle: Thistle,
  peak: Peak,
  wave: Wave,
};

export function DestinationIcon({ icon, className = "" }: { icon: Destination["icon"]; className?: string }) {
  const Comp = ICONS[icon];
  return (
    <span className={className}>
      <Comp />
    </span>
  );
}
