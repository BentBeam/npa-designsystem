import { useId } from 'react'
import './RadioGroup.css'

export interface RadioOption {
  /** Texten bredvid knappen. */
  label: string
  /** Värdet som väljs. */
  value: string
  /** Inaktiverar just detta alternativ. */
  disabled?: boolean
}

export interface RadioGroupProps {
  /** Rubrik för hela gruppen (legend). */
  legend?: string
  /** Alternativen att välja mellan. */
  options: RadioOption[]
  /** Valt värde (kontrollerat fält). */
  value?: string
  /** Anropas med det valda värdet. */
  onChange?: (value: string) => void
  /** Inaktiverar hela gruppen. */
  disabled?: boolean
}

/**
 * Grupp av radioknappar – för att välja **ett** alternativ av flera.
 *
 * Knapparna delar samma `name` så att webbläsaren behandlar dem som en grupp,
 * och allt ligger i en `fieldset`/`legend` för korrekt skärmläsarstöd.
 */
export function RadioGroup({
  legend,
  options,
  value,
  onChange,
  disabled = false,
}: RadioGroupProps) {
  const name = useId()

  return (
    <fieldset className="npa-radiogroup" disabled={disabled}>
      {legend && <legend className="npa-radiogroup__legend">{legend}</legend>}
      {options.map((opt) => (
        <label key={opt.value} className="npa-radio">
          <input
            type="radio"
            className="npa-radio__input"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            disabled={opt.disabled}
            onChange={() => onChange?.(opt.value)}
          />
          <span className="npa-radio__circle" aria-hidden="true" />
          <span className="npa-radio__label">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  )
}
