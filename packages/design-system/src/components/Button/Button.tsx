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

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'py-sm px-lg',
  medium: 'py-md px-xl',
  large: 'py-lg px-xl',
}

/* Varianternas färger pekar enbart på tokens (via Tailwind-temat) – aldrig
   råa hex-värden. `enabled:` ser till att hover/active inte triggas när
   knappen är disabled.

   OBS: `border-color` sätts ENDAST här, aldrig i bas-klasserna nedan – två
   vanliga (icke-variant-prefixade) klasser som båda sätter border-color har
   odefinierad inbördes ordning i Tailwinds genererade CSS, så en delad
   `border-transparent` i basen kan vinna över t.ex. `border-action-secondary-border`
   beroende på Tailwinds interna klass-ordning, oavsett ordning i className-strängen. */
const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border-transparent bg-action-primary text-action-on-primary ' +
    'enabled:hover:bg-action-primary-hover enabled:active:bg-action-primary-active',
  secondary:
    'border-action-secondary-border bg-action-secondary-bg text-action-secondary-fg ' +
    'enabled:hover:bg-action-secondary-hover enabled:active:bg-action-focus-ring',
  ghost:
    'border-transparent bg-transparent text-action-secondary-fg ' +
    'enabled:hover:bg-action-secondary-hover enabled:active:bg-action-focus-ring',
  danger:
    'border-transparent bg-status-error text-text-inverse ' +
    // Figma saknar en danger-hover-token – härleds som en mörkare error-färg.
    'enabled:hover:bg-[color-mix(in_srgb,var(--color-status-error)_85%,black)]',
}

/**
 * Primär knapp i NPA-designsystemet.
 *
 * Använder enbart design tokens (via Tailwind-temat i `tailwind-theme.css`)
 * – inga hårdkodade färger. Det är så vi håller allt enhetligt och enkelt
 * att tema.
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
    'inline-flex items-center justify-center gap-sm',
    'font-sans text-button tracking-button font-medium',
    'border rounded-md cursor-pointer transition-colors duration-150',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    'disabled:bg-action-disabled-bg disabled:text-action-disabled-fg disabled:border-transparent disabled:cursor-not-allowed',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
