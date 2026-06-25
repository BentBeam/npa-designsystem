import type { ReactNode } from 'react'
import './Alert.css'

export interface AlertProps {
  /** Typ av meddelande – styr färg på ram och prick. */
  type?: 'info' | 'success' | 'warning' | 'danger'
  /** Rubrik (valfri). */
  title?: string
  /** Innehållet i meddelandet. */
  children: ReactNode
}

/**
 * Meddelanderuta för att uppmärksamma användaren på något – t.ex. en
 * bekräftelse, varning eller felmeddelande. Följer Figma: hel färgkodad ram,
 * mjuk bakgrund och en liten färgprick före texten.
 */
export function Alert({ type = 'info', title, children }: AlertProps) {
  return (
    <div className={`npa-alert npa-alert--${type}`} role="alert">
      <span className="npa-alert__dot" aria-hidden="true" />
      <div className="npa-alert__body">
        {title && <p className="npa-alert__title">{title}</p>}
        <div className="npa-alert__content">{children}</div>
      </div>
    </div>
  )
}
