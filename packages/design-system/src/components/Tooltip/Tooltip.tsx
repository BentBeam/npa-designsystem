import { useId, type ReactNode } from 'react'
import './Tooltip.css'

export interface TooltipProps {
  /** Texten som visas i tooltipen. */
  content: string
  /** Var tooltipen placeras i förhållande till elementet. */
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** Elementet som tooltipen hör till (t.ex. en knapp eller ikon). */
  children: ReactNode
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
    <span className="npa-tooltip" tabIndex={0} aria-describedby={id}>
      {children}
      <span id={id} role="tooltip" className={`npa-tooltip__bubble npa-tooltip__bubble--${placement}`}>
        {content}
      </span>
    </span>
  )
}
