import { useEffect, useId, useRef } from 'react'
import './Checkbox.css'

export interface CheckboxProps {
  /** Texten bredvid kryssrutan. */
  label: string
  /** Om rutan är ikryssad (kontrollerat fält). */
  checked?: boolean
  /** "Delvis" markerad – t.ex. en förälder där bara vissa barn är valda. */
  indeterminate?: boolean
  /** Inaktiverar rutan. */
  disabled?: boolean
  /** Anropas med det nya värdet när rutan klickas. */
  onChange?: (checked: boolean) => void
}

/**
 * Kryssruta för av/på-val i formulär. Använd `indeterminate` för en förälder
 * som har en blandning av i- och urkryssade barn.
 */
export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)

  // `indeterminate` kan bara sättas via JavaScript, inte som attribut.
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <label className="npa-checkbox" htmlFor={id}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className="npa-checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="npa-checkbox__box" aria-hidden="true" />
      <span className="npa-checkbox__label">{label}</span>
    </label>
  )
}
