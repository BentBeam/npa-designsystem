import { useId } from 'react'

export interface ToggleProps {
  /** Texten bredvid reglaget. */
  label: string
  /** Om reglaget är på (kontrollerat fält). */
  checked?: boolean
  /** Inaktiverar reglaget. */
  disabled?: boolean
  /** Anropas med det nya värdet när reglaget slås om. */
  onChange?: (checked: boolean) => void
}

const wrapperClasses = [
  'inline-flex items-center gap-sm',
  'font-sans text-body-md text-text-primary',
  'cursor-pointer',
  // Inaktiverad – hela reglaget tonas ned (behåller färgen)
  'has-[:disabled]:opacity-85 has-[:disabled]:text-text-disabled has-[:disabled]:cursor-not-allowed',
].join(' ')

/* Native input göms visuellt (men finns kvar för skärmläsare/tangentbord) via
   `peer` – `__track`/`__thumb` styr sitt utseende med `peer-*`-varianter. */
const inputClasses = 'peer absolute opacity-0 w-0 h-0'

const trackClasses = [
  'relative inline-block',
  'w-[40px] h-[22px] shrink-0',
  'bg-border-strong rounded-full',
  'transition-colors duration-150',
  // På
  'peer-checked:bg-action-primary',
  // Sätter en CSS-variabel som tumme-elementet (nedanför i DOM:et) läser av
  // för att flytta sig – motsvarar `+ .npa-toggle__track .npa-toggle__thumb`.
  'peer-checked:[--thumb-x:18px]',
  // Tangentbordsfokus
  'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action-focus-ring',
].join(' ')

const thumbClasses = [
  'absolute top-[2px] left-[2px]',
  'w-[18px] h-[18px]',
  'bg-bg-surface rounded-full shadow-sm',
  'transition-transform duration-150',
  'translate-x-[var(--thumb-x,0px)]',
].join(' ')

/**
 * Reglage (switch) för att slå på/av en inställning direkt – till skillnad
 * från en kryssruta, som oftast bekräftas via en knapp. Använd för
 * inställningar som träder i kraft omedelbart.
 */
export function Toggle({ label, checked = false, disabled = false, onChange }: ToggleProps) {
  const id = useId()
  return (
    <label className={wrapperClasses} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        role="switch"
        className={inputClasses}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={trackClasses} aria-hidden="true">
        <span className={thumbClasses} />
      </span>
      <span>{label}</span>
    </label>
  )
}
