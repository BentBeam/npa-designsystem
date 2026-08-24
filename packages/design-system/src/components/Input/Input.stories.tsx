import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Input } from './Input'

const meta = {
  title: 'Komponenter/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Textfält för formulär med etikett, hjälptext och fel-tillstånd. ' +
          'Fokus- och felfärger kommer från tokens, och fältet är kopplat till ' +
          'sin etikett och sitt felmeddelande för skärmläsare.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-ng-test/blob/main/packages/design-system/src/components/Input/Input.tsx)',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'ändrad' },
  },
  args: {
    label: 'Organisationsnummer',
    placeholder: 'ÅÅMMDD-XXXX',
    onChange: fn(),
  },
  // Gör fältet skrivbart i Storybook: uppdatera arget vid ändring.
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs()
    return (
      <Input
        {...args}
        value={value}
        onChange={(next) => {
          updateArgs({ value: next })
          args.onChange?.(next)
        }}
      />
    )
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {}

export const MedHjälptext: Story = {
  args: { helperText: 'Ange tio siffror utan mellanslag.' },
}

export const Obligatorisk: Story = {
  args: { label: 'E-post', placeholder: 'namn@foretag.se', required: true, type: 'email' },
}

export const Fel: Story = {
  args: { value: '12345', error: 'Numret måste innehålla tio siffror.' },
}

export const Inaktiverad: Story = {
  args: { value: '556677-8899', disabled: true },
}

/** Alla tillstånd bredvid varandra – bra för designgranskning. */
export const AllaTillstånd: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <Input label="Standard" placeholder="Skriv här…" />
      <Input label="Med hjälptext" placeholder="namn@foretag.se" helperText="Vi delar aldrig din e-post." />
      <Input label="Fel" value="12345" error="Ogiltigt värde." />
      <Input label="Inaktiverad" value="Låst värde" disabled />
    </div>
  ),
}
