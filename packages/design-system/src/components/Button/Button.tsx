import './Button.css'

/**
 * Props för NPA-knappen.
 *
 * Kommentarerna här (JSDoc) plockas automatiskt upp av Storybook och visas
 * som beskrivningar i prop-tabellen under "Docs". Skriv dem på svenska så
 * blir dokumentationen begriplig för hela teamet.
 */
export interface ButtonProps {
  /** Texten som visas i knappen. */
  label: string
  /**
   * Visuell variant.
   * - `primary`   – blå, för den viktigaste handlingen på sidan
   * - `secondary` – kantlinje, för sekundära handlingar
   * - `ghost`     – ingen yta, för låg-prioriterade handlingar
   * - `danger`    – röd, för destruktiva handlingar (t.ex. radera)
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  /** Storlek på knappen. */
  size?: 'small' | 'medium' | 'large'
  /** Gör knappen lika bred som sitt föräldraelement. */
  fullWidth?: boolean
  /** Inaktiverar knappen så den inte går att klicka. */
  disabled?: boolean
  /** Anropas när användaren klickar på knappen. */
  onClick?: () => void
}

/**
 * Primär knapp i NPA-designsystemet.
 *
 * Använder enbart design tokens (se `src/styles/tokens.css`) – inga
 * hårdkodade färger. Det är så vi håller allt enhetligt och enkelt att tema.
 */
export function Button({
  label,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = [
    'npa-button',
    `npa-button--${variant}`,
    `npa-button--${size}`,
    fullWidth ? 'npa-button--full' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
