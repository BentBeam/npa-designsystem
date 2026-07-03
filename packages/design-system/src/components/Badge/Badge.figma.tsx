import figma from '@figma/code-connect'
import { Badge } from './Badge'

figma.connect(
  Badge,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=17-16',
  {
    props: {
      status: figma.enum('Variant', {
        Neutral: 'neutral',
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Error: 'danger',
        Pending: 'pending',
        Fraktion: 'fraktion',
      }),
    },
    example: ({ status }) => (
      <Badge status={status} label="Status" />
    ),
  },
)
