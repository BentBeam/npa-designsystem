import { useId, useRef, useState, type ReactNode } from 'react'
import './Tabs.css'

export interface TabItem {
  /** Flikens etikett. */
  label: string
  /** Innehållet som visas när fliken är aktiv. */
  content: ReactNode
}

export interface TabsProps {
  /** Flikarna i ordning. */
  tabs: TabItem[]
  /** Vilken flik som är aktiv från start (index). */
  defaultIndex?: number
}

/**
 * Flikar för att växla mellan vyer. Aktiv flik markeras med NPA:s gula accent.
 *
 * Tillgänglighet: använder rollerna `tablist`/`tab`/`tabpanel`, `aria-selected`
 * och stöd för vänster/höger piltangenter för att byta flik.
 */
export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + dir + tabs.length) % tabs.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="npa-tabs">
      <div className="npa-tabs__list" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <button
              key={i}
              ref={(el) => { tabRefs.current[i] = el }}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              className={`npa-tabs__tab${selected ? ' npa-tabs__tab--active' : ''}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          className="npa-tabs__panel"
          hidden={i !== active}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
