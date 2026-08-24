import { useId } from 'react'
import { FIELD_ERROR, FIELD_HELP, FIELD_LABEL, FIELD_REQUIRED, FIELD_WRAPPER } from '../field-classes'

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

  /* Felfärg (ram + inset-ring) gäller alltid, oavsett hover/fokus – annars
     ärvs default-ramens hover/fokus-beteende (se Input.css-motsvarigheten). */
  const inputClasses = [
    'font-sans text-body-md text-text-primary bg-bg-surface',
    'p-md border rounded-md',
    'placeholder:text-text-placeholder',
    'transition-[border-color,box-shadow] duration-150',
    error
      ? 'border-border-error shadow-[inset_0_0_0_1px_var(--color-border-error)]'
      : 'border-border-default enabled:hover:border-border-strong ' +
        'focus:border-border-focus focus:shadow-[inset_0_0_0_1px_var(--color-border-focus)]',
    'disabled:bg-bg-disabled disabled:text-text-disabled disabled:border-border-disabled disabled:cursor-not-allowed',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={FIELD_WRAPPER}>
      {label && (
        <label className={FIELD_LABEL} htmlFor={id}>
          {label}
          {required && (
            <span className={FIELD_REQUIRED} aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      )}
      <input
        id={id}
        className={inputClasses}
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
        <p id={`${id}-error`} className={FIELD_ERROR}>
          {error}
        </p>
      ) : (
        helperText && (
          <p id={`${id}-help`} className={FIELD_HELP}>
            {helperText}
          </p>
        )
      )}
    </div>
  )
}
