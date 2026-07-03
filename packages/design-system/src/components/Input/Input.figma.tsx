import figma from '@figma/code-connect'
import { Input } from './Input'

figma.connect(
  Input,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=10-33',
  {
    props: {
      disabled: figma.enum('State', {
        Disabled: true,
      }),
      error: figma.enum('State', {
        Error: 'Obligatoriskt fält',
      }),
    },
    example: ({ disabled, error }) => (
      <Input
        label="Etikett"
        placeholder="Platshållartext"
        helperText="Hjälptext"
        disabled={disabled}
        error={error}
      />
    ),
  },
)
