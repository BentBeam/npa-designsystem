import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Komponenter/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Liten etikett för status eller kategori. Färgen styrs av `status`.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger', 'pending', 'fraktion'],
    },
    label: { control: 'text' },
  },
  args: { label: 'Aktiv', status: 'success' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = { args: { label: 'Aktiv', status: 'success' } }
export const Warning: Story = { args: { label: 'Försenad', status: 'warning' } }
export const Danger: Story = { args: { label: 'Stoppad', status: 'danger' } }
export const Info: Story = { args: { label: 'Ny', status: 'info' } }
export const Neutral: Story = { args: { label: 'Utkast', status: 'neutral' } }
export const Pending: Story = { args: { label: 'Väntar', status: 'pending' } }
/** NPA:s vita pill med blå kontur – används för avfallsfraktioner. */
export const Fraktion: Story = { args: { label: 'Pappersförpackningar', status: 'fraktion' } }

export const AllaStatusar: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge label="Utkast" status="neutral" />
      <Badge label="Ny" status="info" />
      <Badge label="Aktiv" status="success" />
      <Badge label="Försenad" status="warning" />
      <Badge label="Stoppad" status="danger" />
      <Badge label="Väntar" status="pending" />
      <Badge label="Pappersförpackningar" status="fraktion" />
    </div>
  ),
}
