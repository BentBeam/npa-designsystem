import figma from '@figma/code-connect'
import { Checkbox } from './Checkbox'

figma.connect(
  Checkbox,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=12-36',
  {
    props: {
      checked: figma.enum('Checked', {
        Checked: true,
        Unchecked: false,
        Indeterminate: false,
      }),
      indeterminate: figma.enum('Checked', {
        Indeterminate: true,
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ checked, indeterminate, disabled }) => (
      <Checkbox
        label="Alternativ"
        checked={checked}
        indeterminate={indeterminate}
        disabled={disabled}
        onChange={() => {}}
      />
    ),
  },
)
