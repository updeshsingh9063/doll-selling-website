import Thumb from './Thumb.jsx'
import LayeredThumb from './LayeredThumb.jsx'
import Icons from './icons.jsx'
import { HAIRCUT_STYLES } from '../data/config.js'

/**
 * Third level: the scrollable 2-column grid of selectable options for a
 * sub-category (e.g. hair/haircut). Selected option gets the magenta ring.
 *
 * Supports three selection modes driven by the sub definition:
 *  - single  (default): pick one, stored under `sub.id`
 *  - multi   (extras):  toggle many, stored as an array under `sub.id`
 *  - multiEye (eyes):   pick a color, applied to left/right/both via a toggle
 */
export default function OptionGrid({
  category,
  sub,
  config,
  onSelect,
  onPrev,
  onNext,
  onConfirm,
  onBack,
  eyeTarget,
  onEyeTargetChange,
}) {
  const isMulti = !!sub.multi
  const isEye = !!sub.multiEye

  // Filter hairstyle options to only those valid for the current haircut
  const options = sub.id === 'hairstyle'
    ? sub.options.filter(o => (HAIRCUT_STYLES[config.haircut] || ['default']).includes(o.id))
    : sub.options

  const isSelected = (optId) => {
    if (isMulti) return (config[sub.id] || []).includes(optId)
    if (isEye) {
      if (eyeTarget === 'both') return config.eyeLeft === optId && config.eyeRight === optId
      return config[eyeTarget] === optId
    }
    return config[sub.id] === optId
  }

  return (
    <div className="rail">
      <div className="panel-head">
        <button type="button" className="panel-head__title" onClick={onBack}>
          <span className="panel-head__icon">{Icons[category.icon]}</span>
          {category.label}/{sub.label}
        </button>
        <div className="panel-head__nav">
          <button type="button" className="nav-arrow" onClick={onPrev} aria-label="Previous">
            {Icons.chevronLeft}
          </button>
          <button type="button" className="nav-arrow" onClick={onNext} aria-label="Next">
            {Icons.chevronRight}
          </button>
        </div>
      </div>

      {isEye && (
        <div className="eye-toggle" role="group" aria-label="Which eye">
          {['left', 'both', 'right'].map((t) => {
            const val = t === 'left' ? 'eyeLeft' : t === 'right' ? 'eyeRight' : 'both'
            return (
              <button
                key={t}
                type="button"
                className={`eye-toggle__btn ${eyeTarget === val ? 'is-active' : ''}`}
                onClick={() => onEyeTargetChange(val)}
              >
                {t}
              </button>
            )
          })}
        </div>
      )}

      <div className="option-grid rail__scroll">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`option ${isSelected(o.id) ? 'is-selected' : ''}`}
            onClick={() => onSelect(sub, o)}
          >
            <span
              className="option__ring"
              {...(sub.id === 'outfit' ? { 'data-outfit': true } : {})}
            >
              {(sub.id === 'haircut' || sub.id === 'face-shape')
                ? <LayeredThumb
                    optionType={sub.id}
                    optionId={o.id}
                    config={config}
                    swatch={o.swatch}
                    alt={o.label}
                  />
                : <Thumb src={o.image} swatch={o.swatch} alt={o.label} className="option__thumb" />
              }
              {isSelected(o.id) && <span className="option__check">{Icons.check}</span>}
            </span>
            <span className="option__label">{o.label}</span>
          </button>
        ))}
      </div>

      <button type="button" className="cta-btn" onClick={onConfirm}>
        Confirm choice
      </button>
    </div>
  )
}
