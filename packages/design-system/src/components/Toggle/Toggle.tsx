import { useId } from 'react'
import './Toggle.css'

export interface ToggleProps {
  /** Texten bredvid reglaget. */
  label: string
  /** Om reglaget är på (kontrollerat fält). */
  checked?: boolean
  /** Inaktiverar reglaget. */
  disabled?: boolean
  /** Anropas med det nya värdet när reglaget slås om. */
  onChange?: (checked: boolean) => void
}

/**
 * Reglage (switch) för att slå på/av en inställning direkt – till skillnad
 * från en kryssruta, som oftast bekräftas via en knapp. Använd för
 * inställningar som träder i kraft omedelbart.
 */
export function Toggle({ label, checked = false, disabled = false, onChange }: ToggleProps) {
  const id = useId()
  return (
    <label className="npa-toggle" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        role="switch"
        className="npa-toggle__input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="npa-toggle__track" aria-hidden="true">
        <span className="npa-toggle__thumb" />
      </span>
      <span className="npa-toggle__label">{label}</span>
    </label>
  )
}
