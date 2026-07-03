import figma from '@figma/code-connect'
import { Tooltip } from './Tooltip'

figma.connect(
  Tooltip,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=18-13',
  {
    example: () => (
      <Tooltip content="Hjälptext för fältet" placement="top">
        <button>Hovra här</button>
      </Tooltip>
    ),
  },
)
