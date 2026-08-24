import type { ReactNode } from 'react'

export interface AlertProps {
  /** Typ av meddelande – styr färg på ram och prick. */
  type?: 'info' | 'success' | 'warning' | 'danger'
  /** Rubrik (valfri). */
  title?: string
  /** Innehållet i meddelandet. */
  children: ReactNode
}

/* Varje typ styr bakgrund + kantlinje på hela rutan, samt bakgrundsfärgen
   på den lilla prick-indikatorn. `border-color` sätts alltid här (aldrig i
   den delade basen) – annars kan Tailwinds genererade CSS-ordning göra att
   en `border-transparent` i basen slår ut en färgad border-klass trots att
   den senare "vinner" i className-strängen. */
const typeClasses: Record<NonNullable<AlertProps['type']>, { container: string; dot: string }> = {
  info: {
    container: 'bg-status-info-bg border-status-info-border',
    dot: 'bg-status-info',
  },
  success: {
    container: 'bg-status-success-bg border-status-success-border',
    dot: 'bg-status-success',
  },
  warning: {
    container: 'bg-status-warning-bg border-status-warning-border',
    dot: 'bg-status-warning',
  },
  danger: {
    container: 'bg-status-error-bg border-status-error-border',
    dot: 'bg-status-error',
  },
}

/**
 * Meddelanderuta för att uppmärksamma användaren på något – t.ex. en
 * bekräftelse, varning eller felmeddelande. Följer Figma: hel färgkodad ram,
 * mjuk bakgrund och en liten färgprick före texten.
 */
export function Alert({ type = 'info', title, children }: AlertProps) {
  const { container, dot } = typeClasses[type]

  const containerClasses = [
    'flex items-start gap-md p-lg',
    'border rounded-md',
    'font-sans text-body-md text-text-primary',
    container,
  ].join(' ')

  const dotClasses = ['flex-shrink-0 w-[10px] h-[10px] mt-[5px] rounded-full', dot].join(' ')

  return (
    <div className={containerClasses} role="alert">
      <span className={dotClasses} aria-hidden="true" />
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        {title && <p className="m-0 font-semibold leading-[20px] text-text-primary">{title}</p>}
        <div className="text-text-secondary [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}
