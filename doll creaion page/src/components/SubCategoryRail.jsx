import CircleButton from './CircleButton.jsx'
import Icons from './icons.jsx'

/**
 * Second level: a category's sub-categories (e.g. hair -> haircut / hairstyle /
 * hair color). Header shows the category name with prev/next chevrons that step
 * between top-level categories, matching the live experience.
 */
export default function SubCategoryRail({ category, onPickSub, onPrev, onNext, onConfirm, onBack }) {
  return (
    <div className="rail">
      <div className="panel-head">
        <button type="button" className="panel-head__title" onClick={onBack}>
          <span className="panel-head__icon">{Icons[category.icon]}</span>
          {category.label}
        </button>
        <div className="panel-head__nav">
          <button type="button" className="nav-arrow" onClick={onPrev} aria-label="Previous category">
            {Icons.chevronLeft}
          </button>
          <button type="button" className="nav-arrow" onClick={onNext} aria-label="Next category">
            {Icons.chevronRight}
          </button>
        </div>
      </div>

      <div className="rail__scroll">
        {category.subs.map((sub) => (
          <CircleButton
            key={sub.id}
            icon={sub.icon}
            label={sub.label}
            onClick={() => onPickSub(sub.id)}
          />
        ))}
      </div>

      <button type="button" className="cta-btn" onClick={onConfirm}>
        Confirm choices
      </button>
    </div>
  )
}
