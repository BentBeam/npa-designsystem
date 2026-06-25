import { useId } from 'react'
import './Select.css'

export interface SelectOption {
  /** Texten som visas i listan. */
  label: string
  /** Värdet som väljs. */
  value: string
  /** Inaktiverar just detta alternativ. */
  disabled?: boolean
}

export interface SelectProps {
  /** Etikett ovanför fältet. */
  label?: string
  /** Alternativen i rullgardinen. */
  options: SelectOption[]
  /** Platshållare som visas först (ej valbar). */
  placeholder?: string
  /** Valt värde (kontrollerat fält). */
  value?: string
  /** Anropas med det valda värdet. */
  onChange?: (value: string) => void
  /** Hjälptext under fältet. */
  helperText?: string
  /** Felmeddelande. Om satt visas fältet i fel-tillstånd. */
  error?: string
  /** Inaktiverar fältet. */
  disabled?: boolean
  /** Markerar fältet som obligatoriskt. */
  required?: boolean
}

/**
 * Rullgardinsmeny för att välja ett av flera alternativ. Bygger på en native
 * `<select>` för bästa tillgänglighet och tangentbordsstöd, med NPA-styling
 * och samma fält-mönster (etikett, hjälptext, fel) som Input.
 */
export function Select({
  label,
  options,
  placeholder,
  value,
  onChange,
  helperText,
  error,
  disabled = false,
  required = false,
}: SelectProps) {
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
      <div className="npa-select-wrap">
        <select
          id={id}
          className={`npa-select${error ? ' npa-select--error' : ''}`}
          value={value ?? ''}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          onChange={(e) => onChange?.(e.target.value)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="npa-select__chevron" aria-hidden="true" />
      </div>
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
