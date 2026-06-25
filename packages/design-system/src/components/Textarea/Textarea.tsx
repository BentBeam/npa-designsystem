import { useId } from 'react'
import './Textarea.css'

export interface TextareaProps {
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
  /** Antal synliga rader (höjd). */
  rows?: number
  /** Aktuellt värde (för kontrollerat fält). */
  value?: string
  /** Anropas när värdet ändras. */
  onChange?: (value: string) => void
}

/**
 * Flerradigt textfält för längre fritext. Delar fält-mönstret (etikett,
 * hjälptext, fel) med Input – samma states: default, focus, disabled, error.
 */
export function Textarea({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  required = false,
  rows = 4,
  value,
  onChange,
}: TextareaProps) {
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
      <textarea
        id={id}
        className={`npa-textarea${error ? ' npa-textarea--error' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
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
