import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Komponenter/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Meddelanderuta för bekräftelser, varningar och fel. Innehållet ' +
          'skickas som `children`, så du kan lägga in text, länkar eller listor.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-eval-designsystem/blob/main/packages/design-system/src/components/Alert/Alert.tsx)',
      },
    },
  },
  argTypes: {
    type: { control: 'radio', options: ['info', 'success', 'warning', 'danger'] },
    title: { control: 'text' },
  },
  args: {
    type: 'info',
    title: 'Information',
    children: 'Det här är ett informationsmeddelande till användaren.',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: { type: 'info', title: 'Visste du att', children: 'Rapporten uppdateras varje natt.' },
}
export const Success: Story = {
  args: { type: 'success', title: 'Sparat', children: 'Dina ändringar har sparats.' },
}
export const Warning: Story = {
  args: { type: 'warning', title: 'Observera', children: 'Sista inlämningsdatum är imorgon.' },
}
export const Danger: Story = {
  args: { type: 'danger', title: 'Något gick fel', children: 'Kunde inte spara. Försök igen.' },
}
