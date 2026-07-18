import Icons from './icons.jsx'

/** The pink→purple gradient circular button used across the right rail. */
export default function CircleButton({ icon, label, onClick, size = 'md', active = false }) {
  return (
    <button
      type="button"
      className={`circle-btn circle-btn--${size} ${active ? 'is-active' : ''}`}
      onClick={onClick}
    >
      <span className="circle-btn__disc">{Icons[icon] || null}</span>
      {label ? <span className="circle-btn__label">{label}</span> : null}
    </button>
  )
}
