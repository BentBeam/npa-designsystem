import { useId } from 'react'
import './Input.css'

export interface InputProps {
  /** Etikett ovanför fältet. */
  label?: string
  /** Platshållartext när fältet är tomt. */
  placeholder?: string
  /** Hjälptext under fältet (visas när det inte finns något fel). */
  helperText?: string
  /** Felmeddelande. Om satt visas fältet i fel-tillstånd och texten under. */
  error?: string
  /** Inaktiverar fältet. */
  disabled?: boolean
  /** Markerar fältet som obligatoriskt (visar *). */
  required?: boolean
  /** Typ av inmatning. */
  type?: 'text' | 'email' | 'password' | 'number'
  /** Aktuellt värde (för kontrollerat fält). */
  value?: string
  /** Anropas när värdet ändras. */
  onChange?: (value: string) => void
}

/**
 * Textfält för formulär. Stödjer etikett, hjälptext och fel-tillstånd – allt
 * kopplat till tokens, så fokus- och felfärger följer designsystemet.
 *
 * Tillgänglighet: etiketten kopplas till fältet, och vid fel sätts
 * `aria-invalid` samt en koppling till felmeddelandet via `aria-describedby`.
 */
export function Input({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  required = false,
  type = 'text',
  value,
  onChange,
}: InputProps) {
  const id = useId()
  const describedById = error ? `${id}-error` : helperText ? `${id}-help` : undefined

  return (
    <div className="npa-field">
      {label && (
        <label className="npa-field__label" htmlFor={id}>
          {label}
          {required && <span className="npa-field__required" aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        id={id}
        className={`npa-input${error ? ' npa-input--error' : ''}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedById}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="npa-field__error">
          {error}
        </p>
      ) : (
        helperText && (
          <p id={`${id}-help`} className="npa-field__help">
            {helperText}
          </p>
        )
      )}
    </div>
  )
}
