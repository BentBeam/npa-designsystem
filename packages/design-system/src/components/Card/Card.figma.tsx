import figma from '@figma/code-connect'
import { Card } from './Card'
import { Button } from '../Button/Button'

figma.connect(
  Card,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=18-2',
  {
    example: () => (
      <Card
        title="Korttitel"
        showMedia
        footer={
          <>
            <Button label="Öppna" />
            <Button label="Avbryt" variant="secondary" />
          </>
        }
      >
        Kort beskrivande text som sammanfattar innehållet i kortet.
      </Card>
    ),
  },
)
