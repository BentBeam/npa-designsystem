import figma from '@figma/code-connect'
import { Tabs } from './Tabs'

figma.connect(
  Tabs,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=19-11',
  {
    example: () => (
      <Tabs
        tabs={[
          { label: 'Flik 1', content: <p>Innehåll för Flik 1</p> },
          { label: 'Flik 2', content: <p>Innehåll för Flik 2</p> },
          { label: 'Flik 3', content: <p>Innehåll för Flik 3</p> },
        ]}
        defaultIndex={0}
      />
    ),
  },
)
