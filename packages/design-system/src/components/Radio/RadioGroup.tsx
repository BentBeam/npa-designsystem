import { useId } from 'react'

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

const fieldsetClasses = 'flex flex-col gap-sm border-none m-0 p-0'

const legendClasses = 'p-0 mb-xs font-sans text-label font-medium text-text-primary'

const labelClasses = [
  'group inline-flex items-center gap-sm',
  'font-sans text-body-md text-text-primary',
  'cursor-pointer',
  'has-[:disabled]:opacity-80 has-[:disabled]:text-text-disabled has-[:disabled]:cursor-not-allowed',
].join(' ')

/* Native input göms visuellt (men finns kvar för skärmläsare/tangentbord) via
   `peer` – `__circle` styr sitt utseende med `peer-*`-varianter. */
const inputClasses = 'peer absolute opacity-0 w-0 h-0'

const circleClasses = [
  'inline-flex items-center justify-center',
  'w-[18px] h-[18px] shrink-0',
  'bg-bg-surface border-[1.5px] border-border-strong rounded-full',
  'transition-colors duration-150',
  'peer-checked:border-action-primary',
  // Hover på ovald, aktiverad knapp → blå ram
  'peer-[:not(:checked):not(:disabled)]:group-hover:border-border-focus',
  'peer-disabled:bg-bg-disabled peer-disabled:border-border-disabled',
  'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action-focus-ring',
  // Pricken i mitten (default dold, ::after)
  'after:content-[""] after:w-[10px] after:h-[10px] after:rounded-full after:bg-action-primary after:scale-0',
  'after:transition-transform after:duration-150',
  'peer-checked:after:scale-100',
  'peer-disabled:after:bg-action-disabled-fg',
].join(' ')

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
    <fieldset className={fieldsetClasses} disabled={disabled}>
      {legend && <legend className={legendClasses}>{legend}</legend>}
      {options.map((opt) => (
        <label key={opt.value} className={labelClasses}>
          <input
            type="radio"
            className={inputClasses}
            name={name}
            value={opt.value}
            checked={value === opt.value}
            disabled={opt.disabled}
            onChange={() => onChange?.(opt.value)}
          />
          <span className={circleClasses} aria-hidden="true" />
          <span>{opt.label}</span>
        </label>
      ))}
    </fieldset>
  )
}
