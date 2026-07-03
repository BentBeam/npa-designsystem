import figma from '@figma/code-connect'
import { Textarea } from './Textarea'

figma.connect(
  Textarea,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=11-23',
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
      <Textarea
        label="Etikett"
        placeholder="Platshållartext"
        helperText="Hjälptext"
        disabled={disabled}
        error={error}
      />
    ),
  },
)
