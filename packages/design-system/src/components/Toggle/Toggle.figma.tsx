import figma from '@figma/code-connect'
import { Toggle } from './Toggle'

figma.connect(
  Toggle,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=13-44',
  {
    props: {
      checked: figma.enum('On', {
        On: true,
        Off: false,
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ checked, disabled }) => (
      <Toggle
        label="Aktivera funktion"
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
      />
    ),
  },
)
