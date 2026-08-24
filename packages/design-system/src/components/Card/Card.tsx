import type { ReactNode } from 'react'

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

const elevationClasses: Record<NonNullable<CardProps['elevation']>, string> = {
  none: 'shadow-none',
  low: 'shadow-sm',
  medium: 'shadow-md',
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
  const classes = [
    'flex flex-col gap-md',
    'bg-bg-surface border border-border-default rounded-lg p-lg',
    'font-sans text-text-primary',
    'w-[340px] max-w-full',
    elevationClasses[elevation],
  ].join(' ')

  return (
    <div className={classes}>
      {(media !== undefined || showMedia) && (
        <div className="h-[120px] bg-bg-muted rounded-md overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:block">
          {media}
        </div>
      )}
      {title && <h3 className="m-0 text-h5 font-semibold text-text-primary">{title}</h3>}
      <div className="text-body-md text-text-secondary [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
      {footer && <div className="flex gap-sm items-center">{footer}</div>}
    </div>
  )
}
