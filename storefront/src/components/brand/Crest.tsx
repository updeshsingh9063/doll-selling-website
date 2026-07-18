export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 2 L44 10 V26 C44 40 35 49 24 54 C13 49 4 40 4 26 V10 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8 L40 14 V26 C40 37 32.5 44.5 24 48.5 C15.5 44.5 8 37 8 26 V14 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M24 18 L27 25 L34.5 25.5 L28.5 30.5 L30.5 38 L24 33.5 L17.5 38 L19.5 30.5 L13.5 25.5 L21 25 Z"
        fill="currentColor"
      />
    </svg>
  );
}
