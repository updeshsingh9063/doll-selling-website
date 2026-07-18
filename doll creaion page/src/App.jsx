import { useState } from 'react'
import Stage from './components/Stage.jsx'
import StartCarousel from './components/StartCarousel.jsx'
import CategoryRail from './components/CategoryRail.jsx'
import SubCategoryRail from './components/SubCategoryRail.jsx'
import OptionGrid from './components/OptionGrid.jsx'
import { CATEGORIES, DEFAULT_CONFIG, PRESETS, HAIRCUT_STYLES } from './data/config.js'

/**
 * Screen / panel state machine:
 *
 *   screen: 'start'  -> opening carousel (pick a starter doll)
 *           'design' -> the stage + one of three right-hand panels:
 *
 *   panel:  'categories' -> face / hair / eyes / clothing / accessories
 *           'subs'       -> a category's sub-categories
 *           'options'    -> the option grid for one sub-category
 *
 * Both "starter photo" and "your design" tabs use the LAYERED doll system.
 * `startConfig` is a frozen snapshot taken when a preset is chosen.
 * `config` is the live state that updates with every edit.
 * Before any edits, both configs are identical so both tabs look the same.
 */
export default function App() {
  const [screen, setScreen] = useState('start')
  const [panel, setPanel] = useState('categories')
  const [catIndex, setCatIndex] = useState(0)
  const [subId, setSubId] = useState(null)
  const [eyeTarget, setEyeTarget] = useState('both')
  const [config, setConfig] = useState(DEFAULT_CONFIG)
  const [startConfig, setStartConfig] = useState(DEFAULT_CONFIG) // frozen snapshot
  const [live, setLive] = useState(false) // false = starter photo, true = your design

  const category = CATEGORIES[catIndex]
  const sub = category?.subs.find((s) => s.id === subId) || null

  // --- navigation helpers ---------------------------------------------------
  const openCategory = (catId) => {
    const idx = CATEGORIES.findIndex((c) => c.id === catId)
    setCatIndex(idx < 0 ? 0 : idx)
    setPanel('subs')
    setScreen('design')
  }

  const stepCategory = (dir) => {
    const next = (catIndex + dir + CATEGORIES.length) % CATEGORIES.length
    setCatIndex(next)
    setSubId(null)
    setPanel('subs')
  }

  const openSub = (id) => {
    setSubId(id)
    setPanel('options')
  }

  const stepSub = (dir) => {
    const subs = category.subs
    const curr = subs.findIndex((s) => s.id === subId)
    const next = (curr + dir + subs.length) % subs.length
    setSubId(subs[next].id)
  }

  // --- selection ------------------------------------------------------------
  const selectOption = (subDef, option) => {
    // Switch to "your design" so the user immediately sees their change.
    setLive(true)

    setConfig((prev) => {
      if (subDef.multi) {
        const list = prev[subDef.id] || []
        const nextList = list.includes(option.id)
          ? list.filter((x) => x !== option.id)
          : [...list, option.id]
        return { ...prev, [subDef.id]: nextList }
      }
      if (subDef.multiEye) {
        if (eyeTarget === 'both') return { ...prev, eyeLeft: option.id, eyeRight: option.id }
        return { ...prev, [eyeTarget]: option.id }
      }
      // When changing haircut, auto-reset hairstyle to 'default' if the current
      // hairstyle is not supported by the newly selected haircut.
      if (subDef.id === 'haircut') {
        const validStyles = HAIRCUT_STYLES[option.id] || ['default']
        const currentStyle = prev.hairstyle || 'default'
        const safeStyle = validStyles.includes(currentStyle) ? currentStyle : 'default'
        return { ...prev, haircut: option.id, hairstyle: safeStyle }
      }
      return { ...prev, [subDef.id]: option.id }
    })
  }

  const startOver = () => {
    setConfig(DEFAULT_CONFIG)
    setStartConfig(DEFAULT_CONFIG)
    setScreen('start')
    setPanel('categories')
    setSubId(null)
    setLive(false)
  }

  const share = async () => {
    const summary = `My Create Your Own doll: ${JSON.stringify(config)}`
    try {
      if (navigator.share) await navigator.share({ title: 'My doll', text: summary })
      else {
        await navigator.clipboard?.writeText(summary)
        alert('Design copied to clipboard!')
      }
    } catch {
      /* user dismissed share sheet */
    }
  }

  const done = () => {
    alert("Great! Your doll design is saved. (Hook this up to cart / checkout.)")
  }

  // --- render ---------------------------------------------------------------
  return (
    <div className="app">
      <main className="app__main">
        {screen === 'start' ? (
          <StartCarousel
            onChoose={(preset) => {
              // Build the initial config for this preset
              const initial = {
                ...DEFAULT_CONFIG,
                ...preset.baseConfig,
                preset: preset.id,
                outfit: preset.native,
                'accessory-set': preset.native,
              }
              setConfig(initial)
              setStartConfig(initial) // freeze a snapshot — starter photo never changes
              setLive(false)          // start on the "starter photo" tab
              setScreen('design')
              setPanel('categories')
            }}
          />
        ) : (
          <Stage
            config={config}
            startConfig={startConfig}
            live={live}
            onToggleLive={() => setLive((v) => !v)}
            onStartOver={startOver}
            onShare={share}
          />
        )}
      </main>

      <aside className="app__panel">
        {panel === 'subs' && screen === 'design' ? (
          <SubCategoryRail
            category={category}
            onPickSub={openSub}
            onPrev={() => stepCategory(-1)}
            onNext={() => stepCategory(1)}
            onConfirm={() => setPanel('categories')}
            onBack={() => setPanel('categories')}
          />
        ) : panel === 'options' && screen === 'design' && sub ? (
          <OptionGrid
            category={category}
            sub={sub}
            config={config}
            eyeTarget={eyeTarget}
            onEyeTargetChange={setEyeTarget}
            onSelect={selectOption}
            onPrev={() => stepSub(-1)}
            onNext={() => stepSub(1)}
            onConfirm={() => setPanel('subs')}
            onBack={() => setPanel('subs')}
          />
        ) : (
          <CategoryRail
            activeCat={screen === 'design' ? category?.id : null}
            onPick={openCategory}
            onDone={done}
          />
        )}
      </aside>
    </div>
  )
}
