import { useId } from 'react'
import { FIELD_ERROR, FIELD_HELP, FIELD_LABEL, FIELD_REQUIRED, FIELD_WRAPPER } from '../field-classes'

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

  /* Felfärg (ram + inset-ring) gäller alltid, oavsett hover/fokus – annars
     ärvs default-ramens hover/fokus-beteende (se Select.css-motsvarigheten).
     `peer` kopplas till chevronens peer-disabled-färg nedan. */
  const selectClasses = [
    'peer appearance-none w-full cursor-pointer',
    'font-sans text-body-md text-text-primary bg-bg-surface',
    'p-md pr-[calc(var(--spacing-md)+18px)] border rounded-md',
    'transition-[border-color,box-shadow] duration-150',
    error
      ? 'border-border-error shadow-[inset_0_0_0_1px_var(--color-border-error)]'
      : 'border-border-default enabled:hover:border-border-strong ' +
        'focus:border-border-focus focus:shadow-[inset_0_0_0_1px_var(--color-border-focus)]',
    'disabled:bg-bg-disabled disabled:text-text-disabled disabled:border-border-disabled disabled:cursor-not-allowed',
  ]
    .filter(Boolean)
    .join(' ')

  /* Egen chevron (˅) ritad med två kantlinjer, precis som tidigare CSS. */
  const chevronClasses = [
    'absolute right-md top-1/2 h-2 w-2',
    'translate-y-[-65%] rotate-45',
    'border-r-2 border-b-2 border-text-secondary',
    'pointer-events-none',
    'peer-disabled:border-r-text-disabled peer-disabled:border-b-text-disabled',
  ].join(' ')

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
      <div className="relative flex">
        <select
          id={id}
          className={selectClasses}
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
        <span className={chevronClasses} aria-hidden="true" />
      </div>
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
