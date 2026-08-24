import { useId, type ReactNode } from 'react'

export interface TooltipProps {
  /** Texten som visas i tooltipen. */
  content: string
  /** Var tooltipen placeras i förhållande till elementet. */
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** Elementet som tooltipen hör till (t.ex. en knapp eller ikon). */
  children: ReactNode
}

/* Bubblans bas-stil. Dold tills hover/fokus (via `group-hover`/`group-focus-within`
   på förälderns `group`-klass) – matchar tidigare :hover/:focus-within i CSS. */
const bubbleBaseClasses =
  'absolute z-10 w-max max-w-[220px] bg-bg-inverse text-text-inverse font-sans ' +
  'text-body-sm py-sm px-md rounded-md shadow-md ' +
  'opacity-0 invisible pointer-events-none transition-opacity duration-[120ms] ease ' +
  'group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible ' +
  // Liten pil som pekar mot elementet
  "after:content-[''] after:absolute after:border-[5px] after:border-transparent"

/* Placering + pilens riktning/färg per placement. */
const placementClasses: Record<NonNullable<TooltipProps['placement']>, string> = {
  top:
    'bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 ' +
    'after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-bg-inverse',
  bottom:
    'top-[calc(100%+8px)] left-1/2 -translate-x-1/2 ' +
    'after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-bg-inverse',
  left:
    'right-[calc(100%+8px)] top-1/2 -translate-y-1/2 ' +
    'after:left-full after:top-1/2 after:-translate-y-1/2 after:border-l-bg-inverse',
  right:
    'left-[calc(100%+8px)] top-1/2 -translate-y-1/2 ' +
    'after:right-full after:top-1/2 after:-translate-y-1/2 after:border-r-bg-inverse',
}

/**
 * Liten förklarande text som visas vid hover eller tangentbordsfokus.
 *
 * Tillgänglighet: tooltipen kopplas till sitt element via `aria-describedby`
 * och kan nås med tangentbord (wrappern är fokuserbar). Använd för korta
 * förtydliganden – inte för viktig information som måste läsas.
 */
export function Tooltip({ content, placement = 'top', children }: TooltipProps) {
  const id = useId()
  return (
    <span
      className="group relative inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-focus-ring"
      tabIndex={0}
      aria-describedby={id}
    >
      {children}
      <span
        id={id}
        role="tooltip"
        className={[bubbleBaseClasses, placementClasses[placement]].join(' ')}
      >
        {content}
      </span>
    </span>
  )
}
