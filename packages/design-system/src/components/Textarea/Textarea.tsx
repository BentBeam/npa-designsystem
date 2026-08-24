import { useId } from 'react'
import { FIELD_ERROR, FIELD_HELP, FIELD_LABEL, FIELD_REQUIRED, FIELD_WRAPPER } from '../field-classes'

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

  /* Felfärg (ram + inset-ring) gäller alltid, oavsett hover/fokus – annars
     ärvs default-ramens hover/fokus-beteende (se Textarea.css-motsvarigheten). */
  const textareaClasses = [
    'font-sans text-body-md text-text-primary bg-bg-surface',
    'p-md border rounded-md resize-y min-h-[88px]',
    'placeholder:text-text-placeholder',
    'transition-[border-color,box-shadow] duration-150',
    error
      ? 'border-border-error shadow-[inset_0_0_0_1px_var(--color-border-error)]'
      : 'border-border-default enabled:hover:border-border-strong ' +
        'focus:border-border-focus focus:shadow-[inset_0_0_0_1px_var(--color-border-focus)]',
    'disabled:bg-bg-disabled disabled:text-text-disabled disabled:border-border-disabled disabled:cursor-not-allowed disabled:resize-none',
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
      <textarea
        id={id}
        className={textareaClasses}
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
