import figma from '@figma/code-connect'
import { RadioGroup } from './RadioGroup'

figma.connect(
  RadioGroup,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=13-24',
  {
    props: {
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ disabled }) => (
      <RadioGroup
        legend="Välj ett alternativ"
        options={[
          { value: 'a', label: 'Alternativ A' },
          { value: 'b', label: 'Alternativ B' },
        ]}
        value="a"
        disabled={disabled}
        onChange={() => {}}
      />
    ),
  },
)
