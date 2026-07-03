import figma from '@figma/code-connect'
import { Select } from './Select'

figma.connect(
  Select,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=11-47',
  {
    props: {
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ disabled }) => (
      <Select
        label="Etikett"
        placeholder="Välj alternativ"
        options={[
          { value: 'a', label: 'Alternativ A' },
          { value: 'b', label: 'Alternativ B' },
        ]}
        disabled={disabled}
        onChange={() => {}}
      />
    ),
  },
)
