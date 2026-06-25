import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta = {
  title: 'Komponenter/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Behållare som grupperar innehåll. Visar hur komponenter kan ' +
          'sättas ihop – här med en Badge i innehållet och Buttons i sidfoten.',
      },
    },
  },
  argTypes: {
    elevation: { control: 'inline-radio', options: ['none', 'low', 'medium'] },
    title: { control: 'text' },
  },
  args: { title: 'Producentrapport', elevation: 'low' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Enkel: Story = {
  args: { children: 'Ett kort med bara text och en rubrik.' },
}

/** Som i Figma: mediayta, titel, text och åtgärder (Öppna + Avbryt). */
export const SomFigma: Story = {
  render: (args) => (
    <Card
      {...args}
      showMedia
      title="Korttitel"
      footer={
        <>
          <Button label="Öppna" variant="primary" size="small" />
          <Button label="Avbryt" variant="ghost" size="small" />
        </>
      }
    >
      <p style={{ margin: 0 }}>
        Kort beskrivande text som sammanfattar innehållet i kortet.
      </p>
    </Card>
  ),
  args: { title: 'Korttitel', children: null },
}

/** Kombinerar Card + Badge + Button – så här återanvänds komponenter ihop. */
export const MedInnehåll: Story = {
  render: (args) => (
    <Card {...args}>
      <p style={{ marginTop: 0 }}>
        Rapporten för Q2 2026 är inlämnad och väntar på granskning.
      </p>
      <Badge label="Inskickad" status="success" />
    </Card>
  ),
  args: {
    title: 'Producentrapport Q2',
    children: null,
  },
}

export const MedSidfot: Story = {
  render: (args) => (
    <Card
      {...args}
      footer={
        <>
          <Button label="Godkänn" variant="primary" size="small" />
          <Button label="Avslå" variant="secondary" size="small" />
        </>
      }
    >
      <p style={{ marginTop: 0 }}>Granska rapporten innan du fattar beslut.</p>
    </Card>
  ),
  args: { title: 'Beslut krävs', children: null },
}
