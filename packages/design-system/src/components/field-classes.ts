/**
 * Delad styling för formulärfält (etikett, hjälptext, felmeddelande).
 * Motsvarar tidigare styles/field.css – återanvänds av Input, Select och
 * Textarea via Tailwind-utilityklasser i stället för en delad stylesheet.
 *
 * Matchar Figma: etikett Medium 14/20, hjälptext text-tertiary 12/16,
 * och hela fältet tonas ned (opacity) i inaktiverat läge.
 */

/** Wrapper runt hela fältet (etikett + kontroll + hjälp/fel-text). */
export const FIELD_WRAPPER = 'group flex flex-col gap-xs font-sans max-w-[320px] has-[:disabled]:opacity-85'

/** Etikett ovanför fältet. */
export const FIELD_LABEL = 'text-label font-medium text-text-primary group-has-[:disabled]:text-text-disabled'

/** Asterisk för obligatoriska fält. */
export const FIELD_REQUIRED = 'text-status-error'

/** Hjälptext under fältet (visas när det inte finns något fel). */
export const FIELD_HELP = 'm-0 text-caption text-text-tertiary group-has-[:disabled]:text-text-disabled'

/** Felmeddelande under fältet. */
export const FIELD_ERROR = 'm-0 text-caption text-status-error'
