import Icons from './icons.jsx'
import DollPreview, { AccessoryTray } from './DollPreview.jsx'
import { PRESETS } from '../data/config.js'

/**
 * Stage component.
 *
 * Both tabs use the LAYERED doll system (no flat marketing photos).
 *
 *  "starter photo" → DollPreview with startConfig (frozen snapshot, never changes)
 *  "your design"   → DollPreview with config (live, updates with every edit)
 *
 * Before any edits, startConfig === config so both tabs look identical.
 * After edits, starter stays frozen while "your design" reflects all changes.
 */
export default function Stage({ config, startConfig, live, onToggleLive, onStartOver, onShare }) {
  const displayConfig = live ? config : startConfig

  return (
    <div className="stage">
      <button type="button" className="stage__startover" onClick={onStartOver}>
        {Icons.chevronLeft}
        <span>start over</span>
      </button>

      {/* Tab toggle — always visible */}
      <div className="stage__mode" role="group" aria-label="Preview mode">
        <button
          type="button"
          className={`stage__mode-btn ${!live ? 'is-active' : ''}`}
          onClick={() => live && onToggleLive()}
        >
          starter photo
        </button>
        <button
          type="button"
          className={`stage__mode-btn ${live ? 'is-active' : ''}`}
          onClick={() => !live && onToggleLive()}
        >
          your design
        </button>
      </div>

      <div className="stage__doll">
        {/* Always use layered rendering. Switch config based on the active tab. */}
        <DollPreview config={displayConfig} live={true} />
        <AccessoryTray config={config} />
      </div>

      <button type="button" className="stage__share" onClick={onShare}>
        <span className="stage__share-icon">{Icons.share}</span>
        <span>share</span>
      </button>
    </div>
  )
}
