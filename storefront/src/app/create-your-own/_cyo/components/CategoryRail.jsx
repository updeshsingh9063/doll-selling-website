import CircleButton from './CircleButton.jsx'
import { CATEGORIES } from '../data/config.js'

/** Top-level category rail with the primary "I'm done designing" CTA. */
export default function CategoryRail({ activeCat, onPick, onDone }) {
  return (
    <div className="rail">
      <div className="rail__scroll">
        {CATEGORIES.map((cat) => (
          <CircleButton
            key={cat.id}
            icon={cat.icon}
            label={cat.label}
            active={activeCat === cat.id}
            onClick={() => onPick(cat.id)}
          />
        ))}
      </div>
      <button type="button" className="cta-btn" onClick={onDone}>
        I'm done designing
      </button>
    </div>
  )
}
