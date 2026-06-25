import type { ReactNode } from 'react'
import './Card.css'

export interface CardProps {
  /** Mediayta högst upp (t.ex. en bild). Lämna tom för en grå platshållare. */
  media?: ReactNode
  /** Visa mediaytan (grå platshållare) även utan eget innehåll. */
  showMedia?: boolean
  /** Rubrik (valfri). */
  title?: string
  /** Kortets innehåll. */
  children: ReactNode
  /** Innehåll längst ner, t.ex. knappar (valfri). */
  footer?: ReactNode
  /** Höjd på skuggan. */
  elevation?: 'none' | 'low' | 'medium'
}

/**
 * Yt-behållare som grupperar relaterat innehåll. Kan ha en mediayta överst,
 * titel, text och åtgärder i sidfoten. Kombinera gärna med andra komponenter.
 */
export function Card({
  media,
  showMedia = false,
  title,
  children,
  footer,
  elevation = 'low',
}: CardProps) {
  return (
    <div className={`npa-card npa-card--${elevation}`}>
      {(media !== undefined || showMedia) && <div className="npa-card__media">{media}</div>}
      {title && <h3 className="npa-card__title">{title}</h3>}
      <div className="npa-card__body">{children}</div>
      {footer && <div className="npa-card__footer">{footer}</div>}
    </div>
  )
}
