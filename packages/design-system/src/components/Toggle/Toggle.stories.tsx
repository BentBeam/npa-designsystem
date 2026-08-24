import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Toggle } from './Toggle'

const meta = {
  title: 'Komponenter/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Reglage (switch) för inställningar som träder i kraft direkt. ' +
          'Har `role="switch"` för korrekt skärmläsarstöd.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-designsystem/blob/main/packages/design-system/src/components/Toggle/Toggle.tsx)',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'ändrad' },
  },
  args: { label: 'Skicka notiser via e-post', onChange: fn() },
  // Gör reglaget klickbart i Storybook: uppdatera arget vid ändring.
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs()
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={(next) => {
          updateArgs({ checked: next })
          args.onChange?.(next)
        }}
      />
    )
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Av: Story = { args: { checked: false } }
export const På: Story = { args: { checked: true } }
export const Inaktiverad: Story = { args: { disabled: true, checked: true } }

export const AllaTillstånd: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Toggle label="Av" checked={false} />
      <Toggle label="På" checked />
      <Toggle label="Inaktiverad (på)" checked disabled />
      <Toggle label="Inaktiverad (av)" disabled />
    </div>
  ),
}
