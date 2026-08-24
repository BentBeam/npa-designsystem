export interface BadgeProps {
  /** Texten i badgen. */
  label: string
  /**
   * Status som styr färgen.
   * `fraktion` är NPA:s vita pill med blå kontur (används för avfallsfraktioner).
   */
  status?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'pending' | 'fraktion'
}

/* Statusernas färger pekar enbart på tokens (via Tailwind-temat). `fraktion`
   är en vit pill med blå kontur + blå text. `border-color` sätts alltid här
   (aldrig i den delade basen) – annars kan Tailwinds genererade CSS-ordning
   göra att en `border-transparent` i basen slår ut en färgad border-klass
   trots att den senare "vinner" i className-strängen. */
const statusClasses: Record<NonNullable<BadgeProps['status']>, string> = {
  neutral: 'border-transparent bg-bg-muted text-text-secondary',
  info: 'border-transparent bg-status-info-bg text-status-info',
  success: 'border-transparent bg-status-success-bg text-status-success',
  warning: 'border-transparent bg-status-warning-bg text-status-warning',
  danger: 'border-transparent bg-status-error-bg text-status-error',
  pending: 'border-transparent bg-status-pending-bg text-status-pending',
  fraktion: 'border-action-secondary-border bg-action-secondary-bg text-action-secondary-fg',
}

/**
 * Liten etikett för att visa status eller kategori, t.ex. "Aktiv", "Försenad".
 */
export function Badge({ label, status = 'neutral' }: BadgeProps) {
  const classes = [
    'inline-flex items-center justify-center whitespace-nowrap',
    'font-sans text-caption font-medium',
    'py-xs px-md border rounded-full',
    statusClasses[status],
  ].join(' ')

  return <span className={classes}>{label}</span>
}
