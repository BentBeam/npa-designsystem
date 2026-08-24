import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Komponenter/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Kryssruta för av/på-val. Den blå fyllningen och bocken kommer från ' +
          'tokens. `indeterminate` används för en förälder med blandade barn.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-eval-designsystem/blob/main/packages/design-system/src/components/Checkbox/Checkbox.tsx)',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'ändrad' },
  },
  args: { label: 'Jag godkänner villkoren', onChange: fn() },
  // Gör rutan klickbar i Storybook: uppdatera arget vid ändring.
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs()
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(next) => {
          updateArgs({ checked: next })
          args.onChange?.(next)
        }}
      />
    )
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Urkryssad: Story = { args: { checked: false } }
export const Ikryssad: Story = { args: { checked: true } }
export const Delvis: Story = { args: { indeterminate: true, label: 'Välj alla' } }
export const Inaktiverad: Story = { args: { disabled: true, checked: true } }

export const AllaTillstånd: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Checkbox label="Urkryssad" checked={false} />
      <Checkbox label="Ikryssad" checked />
      <Checkbox label="Delvis vald" indeterminate />
      <Checkbox label="Inaktiverad" disabled checked />
    </div>
  ),
}
