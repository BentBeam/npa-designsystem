/* =========================================================================
   NPA Design System – paketets publika API.
   Allt som ska gå att importera från "@npa-eval/designsystem" exporteras här.

   Vi importerar även global.css (tokens + Poppins) så att den hamnar i
   paketets CSS-bundle. Konsumenten importerar den en gång via
   "@npa-eval/designsystem/styles.css".
   ========================================================================= */

import './styles/global.css'

export { Button } from './components/Button/Button'
export type { ButtonProps } from './components/Button/Button'

export { BananaButton } from './components/BananaButton/BananaButton'
export type { BananaButtonProps } from './components/BananaButton/BananaButton'

export { Badge } from './components/Badge/Badge'
export type { BadgeProps } from './components/Badge/Badge'

export { Alert } from './components/Alert/Alert'
export type { AlertProps } from './components/Alert/Alert'

export { Card } from './components/Card/Card'
export type { CardProps } from './components/Card/Card'

export { Input } from './components/Input/Input'
export type { InputProps } from './components/Input/Input'

export { Textarea } from './components/Textarea/Textarea'
export type { TextareaProps } from './components/Textarea/Textarea'

export { Checkbox } from './components/Checkbox/Checkbox'
export type { CheckboxProps } from './components/Checkbox/Checkbox'

export { RadioGroup } from './components/Radio/RadioGroup'
export type { RadioGroupProps, RadioOption } from './components/Radio/RadioGroup'

export { Toggle } from './components/Toggle/Toggle'
export type { ToggleProps } from './components/Toggle/Toggle'

export { Select } from './components/Select/Select'
export type { SelectProps, SelectOption } from './components/Select/Select'

export { Tabs } from './components/Tabs/Tabs'
export type { TabsProps, TabItem } from './components/Tabs/Tabs'

export { Tooltip } from './components/Tooltip/Tooltip'
export type { TooltipProps } from './components/Tooltip/Tooltip'
