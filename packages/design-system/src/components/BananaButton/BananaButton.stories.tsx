import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { BananaButton } from './BananaButton'

const meta = {
  title: 'Komponenter/BananaButton',
  component: BananaButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'En lekfull ikon-knapp – bananen byter färg från gul till blå vid hover. ' +
          'Har ingen synlig text, så `ariaLabel` krävs för skärmläsare.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-eval-designsystem/blob/main/packages/design-system/src/components/BananaButton/BananaButton.tsx)',
      },
    },
  },
  argTypes: {
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'klickad' },
  },
  args: {
    ariaLabel: 'Banan-knapp',
    onClick: fn(),
  },
} satisfies Meta<typeof BananaButton>

export default meta
type Story = StoryObj<typeof meta>

/** Standardläge – gul banan. Hovra för att se blått tillstånd. */
export const Default: Story = {}

/** Inaktiverat tillstånd. */
export const Disabled: Story = {
  args: { disabled: true },
}
