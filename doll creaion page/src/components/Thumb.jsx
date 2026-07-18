import { useState } from 'react'
import { gradientOf } from '../data/selectors.js'

/**
 * Image thumbnail that gracefully degrades to a colored gradient placeholder
 * when the real asset isn't present yet. Drop the real file at `src` and it
 * shows automatically — no code change needed.
 */
export default function Thumb({ src, swatch, alt, className = '', showLabel }) {
  const [failed, setFailed] = useState(false)
  const usePlaceholder = !src || failed

  if (usePlaceholder) {
    return (
      <span
        className={`thumb-placeholder ${className}`}
        style={{ background: gradientOf(swatch) }}
        role="img"
        aria-label={alt}
      >
        {showLabel ? <span className="thumb-placeholder__label">{alt}</span> : null}
      </span>
    )
  }

  return (
    <img
      className={`thumb-img ${className}`}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  )
}
