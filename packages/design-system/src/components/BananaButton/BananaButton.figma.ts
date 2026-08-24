// url=https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA_CC_TEST_DesignSystem?node-id=58-35
// source=packages/design-system/src/components/BananaButton/BananaButton.tsx
// component=BananaButton
import figma from 'figma'

const instance = figma.selectedInstance

// "State" (Default/Hover) styr bara ett visuellt :hover-tillstånd i koden –
// det finns ingen motsvarande prop att sätta det med, så det mappas inte.
void instance

export default {
  example: figma.code`<BananaButton ariaLabel="Banan-knapp" />`,
  imports: ['import { BananaButton } from "@npa/design-system"'],
  id: 'banana-button',
  metadata: {
    nestable: true,
  },
}
