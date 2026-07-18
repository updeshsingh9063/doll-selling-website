/**
 * Inline SVG icons used on the circular category / sub-category buttons.
 * All are single-color (currentColor) so the button gradient shows through
 * the container and the icon stays crisp white on top.
 */
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Icons = {
  // ---- top-level categories -------------------------------------------------
  face: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 3c3.9 0 6 2.6 6 7 0 3.6-2.7 8-6 8s-6-4.4-6-8c0-4.4 2.1-7 6-7z" />
      <path d="M8 4c1.2 1.6 3 2.4 5.5 2.4M9 11h.01M15 11h.01" />
    </svg>
  ),
  hair: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 4c4 0 7 3 7 8v7M12 4C8 4 5 7 5 12v7" />
      <path d="M8.5 9c.8 2.2.8 5-.5 8M15.5 9c-.8 2.2-.8 5 .5 8" />
    </svg>
  ),
  eyes: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  clothing: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M8 3l4 2 4-2 4 3-2.5 3L15 8v13H9V8L4.5 9 2 6z" />
    </svg>
  ),
  accessories: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M4 8h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  extras: (
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="7" cy="14" r="3.5" />
      <circle cx="17" cy="14" r="3.5" />
      <path d="M10.5 13.5c.8-.8 2.2-.8 3 0M2.5 12l2-2M21.5 12l-2-2" />
    </svg>
  ),

  // ---- sub-categories -------------------------------------------------------
  faceShape: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 3c4 0 6 2.8 6 7.5S15 21 12 21 6 15.2 6 10.5 8 3 12 3z" />
    </svg>
  ),
  skinTone: (
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
    </svg>
  ),
  freckles: (
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 11h.01M12 10h.01M15 11h.01M10.5 13h.01M13.5 13h.01" />
    </svg>
  ),
  haircut: ( // scissors
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <path d="M8 8.5L20 17M8 15.5L20 7" />
    </svg>
  ),
  hairstyle: ( // hair dryer
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M3 9a5 5 0 0 1 5-5h6a4 4 0 0 1 0 8H8l-1 4H4l1-4a5 5 0 0 1-2-3z" />
      <path d="M15 10l5 2M15 8l5-2" />
    </svg>
  ),
  hairColor: ( // color drops
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M8 3c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7z" />
      <path d="M17 9c1.6 2 2.5 3.2 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.3.9-2.5 2.5-4.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  eyeColor: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),

  // ---- misc UI --------------------------------------------------------------
  chevronLeft: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 15V3M8 7l4-4 4 4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M5 12l5 5L19 6" />
    </svg>
  ),
}

export default Icons
