import { useId, useRef, useState, type ReactNode } from 'react'

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

/* Flikens bas-stil. `leading-5` (20px) matchar Figma exakt – det är INTE
   samma som --font-body-md-lh (22px), som används i panelen nedan.
   OBS: `background-color` sätts ENDAST i tabStateClasses nedan, aldrig här –
   två vanliga (icke-variant-prefixade) klasser som båda sätter bg-color har
   odefinierad inbördes ordning i Tailwinds genererade CSS. */
const tabBaseClasses =
  'appearance-none border-none py-md px-lg rounded-md ' +
  'font-sans text-[length:var(--font-body-md-size)] leading-5 cursor-pointer ' +
  'transition-colors duration-150'

/* Aktiv = NPA:s gula pill + mörk fet text. Inaktiv = grå hover-pill.
   (focus-visible-ring hanteras globalt för <button> i global.css.) */
const tabStateClasses: Record<'active' | 'inactive', string> = {
  active: 'bg-accent-active-tab text-text-primary font-semibold',
  inactive: 'bg-transparent text-text-secondary font-medium hover:bg-bg-muted hover:text-text-primary',
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
    <div className="font-sans max-w-[640px]">
      <div className="flex gap-sm py-sm" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <button
              key={i}
              ref={(el) => { tabRefs.current[i] = el }}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              className={[tabBaseClasses, tabStateClasses[selected ? 'active' : 'inactive']].join(' ')}
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
          className="py-lg px-xs text-body-md text-text-primary"
          hidden={i !== active}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
