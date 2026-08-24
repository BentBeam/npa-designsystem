import { useEffect, useId, useRef } from 'react'

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

/* Native input göms visuellt (men finns kvar för skärmläsare/tangentbord) via
   `peer` – `__box` styr sitt utseende med `peer-*`-varianter beroende på
   inputens tillstånd (checked/indeterminate/disabled/focus-visible). */
const inputClasses = 'peer absolute opacity-0 w-0 h-0'

const boxClasses = [
  'inline-flex items-center justify-center',
  'w-[18px] h-[18px] shrink-0',
  'bg-bg-surface border-[1.5px] border-border-strong rounded-sm',
  'transition-colors duration-150',
  // Ikryssad eller delvis vald → fylld blå ruta
  'peer-checked:bg-action-primary peer-checked:border-action-primary',
  'peer-indeterminate:bg-action-primary peer-indeterminate:border-action-primary',
  // Hover på urkryssad, aktiverad ruta → blå ram (styrs av att labeln, `group`, hovras)
  'peer-[:not(:checked):not(:indeterminate):not(:disabled)]:group-hover:border-border-focus',
  // Inaktiverad
  'peer-disabled:bg-bg-disabled peer-disabled:border-border-disabled',
  'peer-[:checked:disabled]:bg-action-disabled-bg peer-[:checked:disabled]:border-action-disabled-bg',
  'peer-[:indeterminate:disabled]:bg-action-disabled-bg peer-[:indeterminate:disabled]:border-action-disabled-bg',
  // Tangentbordsfokus
  'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action-focus-ring',
  // Bocken (default dold, ::after)
  'after:content-[""] after:w-[5px] after:h-[9px] after:border-solid after:border-action-on-primary',
  'after:border-t-0 after:border-r-2 after:border-b-2 after:border-l-0 after:rotate-45 after:mb-[2px] after:opacity-0',
  'peer-checked:after:opacity-100',
  // Delvis vald → vågrätt streck istället för bock
  'peer-indeterminate:after:w-[9px] peer-indeterminate:after:h-[2px] peer-indeterminate:after:border-none',
  'peer-indeterminate:after:bg-action-on-primary peer-indeterminate:after:rotate-0 peer-indeterminate:after:mb-0 peer-indeterminate:after:opacity-100',
].join(' ')

const wrapperClasses = [
  'group inline-flex items-center gap-sm',
  'font-sans text-body-md text-text-primary',
  'cursor-pointer',
  'has-[:disabled]:opacity-80 has-[:disabled]:text-text-disabled has-[:disabled]:cursor-not-allowed',
].join(' ')

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
    <label className={wrapperClasses} htmlFor={id}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={inputClasses}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={boxClasses} aria-hidden="true" />
      <span>{label}</span>
    </label>
  )
}
