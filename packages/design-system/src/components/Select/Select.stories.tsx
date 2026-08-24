import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Select } from './Select'

const KOMMUNER = [
  { label: 'Stockholm', value: 'stockholm' },
  { label: 'Göteborg', value: 'goteborg' },
  { label: 'Malmö', value: 'malmo' },
  { label: 'Uppsala', value: 'uppsala' },
]

const meta = {
  title: 'Komponenter/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Rullgardinsmeny byggd på en native `<select>` för bästa tillgänglighet, ' +
          'med NPA-styling och samma fält-mönster (etikett, hjälptext, fel) som Input.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-eval-designsystem/blob/main/packages/design-system/src/components/Select/Select.tsx)',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'vald' },
  },
  args: {
    label: 'Kommun',
    placeholder: 'Välj kommun…',
    options: KOMMUNER,
    onChange: fn(),
  },
  // Gör fältet valbart i Storybook: uppdatera arget vid ändring.
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs()
    return (
      <Select
        {...args}
        value={value}
        onChange={(next) => {
          updateArgs({ value: next })
          args.onChange?.(next)
        }}
      />
    )
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {}
export const MedValtVärde: Story = { args: { value: 'goteborg' } }
export const MedHjälptext: Story = { args: { helperText: 'Välj den kommun ärendet gäller.' } }
export const Obligatorisk: Story = { args: { required: true } }
export const Fel: Story = { args: { error: 'Du måste välja en kommun.' } }
export const Inaktiverad: Story = { args: { value: 'malmo', disabled: true } }
