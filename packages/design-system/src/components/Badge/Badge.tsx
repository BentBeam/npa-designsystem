import './Badge.css'

export interface BadgeProps {
  /** Texten i badgen. */
  label: string
  /**
   * Status som styr färgen.
   * `fraktion` är NPA:s vita pill med blå kontur (används för avfallsfraktioner).
   */
  status?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'pending' | 'fraktion'
}

/**
 * Liten etikett för att visa status eller kategori, t.ex. "Aktiv", "Försenad".
 */
export function Badge({ label, status = 'neutral' }: BadgeProps) {
  return <span className={`npa-badge npa-badge--${status}`}>{label}</span>
}
