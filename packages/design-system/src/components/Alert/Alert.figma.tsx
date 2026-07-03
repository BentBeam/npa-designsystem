import figma from '@figma/code-connect'
import { Alert } from './Alert'

figma.connect(
  Alert,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=17-40',
  {
    props: {
      type: figma.enum('Variant', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Error: 'danger',
      }),
    },
    example: ({ type }) => (
      <Alert type={type} title="Rubrik">
        Beskrivning av meddelandet.
      </Alert>
    ),
  },
)
