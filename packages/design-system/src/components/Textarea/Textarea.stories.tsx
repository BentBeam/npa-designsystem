import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Textarea } from './Textarea'

const meta = {
  title: 'Komponenter/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flerradigt textfält för längre fritext. Delar fält-mönster och states ' +
          '(default, focus, disabled, error) med Input.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-eval-designsystem/blob/main/packages/design-system/src/components/Textarea/Textarea.tsx)',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    rows: { control: { type: 'number', min: 2, max: 12 } },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'ändrad' },
  },
  args: {
    label: 'Meddelande',
    placeholder: 'Skriv ditt meddelande här…',
    onChange: fn(),
  },
  // Gör fältet skrivbart i Storybook: uppdatera arget vid ändring.
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs()
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(next) => {
          updateArgs({ value: next })
          args.onChange?.(next)
        }}
      />
    )
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {}
export const MedHjälptext: Story = { args: { helperText: 'Max 500 tecken.' } }
export const Obligatorisk: Story = { args: { required: true } }
export const Fel: Story = { args: { value: 'För kort.', error: 'Meddelandet måste vara minst 20 tecken.' } }
export const Inaktiverad: Story = { args: { value: 'Låst innehåll', disabled: true } }
