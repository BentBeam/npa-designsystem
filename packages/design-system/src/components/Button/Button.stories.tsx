import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'

/**
 * `meta` beskriver komponenten för Storybook.
 * - `title`     styr var i menyn den hamnar (mapp / namn).
 * - `tags: ['autodocs']` genererar automatiskt en Docs-sida med prop-tabell.
 * - `argTypes`  styr hur reglagen (Controls) ser ut – t.ex. en dropdown.
 */
const meta = {
  title: 'Komponenter/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Knappen är NPA:s primära interaktionselement. Den bygger helt på ' +
          'design tokens, så färger och avstånd följer automatiskt med om temat ' +
          'ändras. Välj **variant** efter hur viktig handlingen är.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visuell variant – väljs efter handlingens vikt.',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'klickad' },
  },
  // Standardvärden för reglagen
  args: {
    label: 'Knapp',
    variant: 'primary',
    size: 'medium',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/* --- En story per variant/tillstånd --------------------------------- */

/** Den viktigaste handlingen på en sida – t.ex. "Spara" eller "Skicka". */
export const Primary: Story = {
  args: { variant: 'primary', label: 'Spara' },
}

/** Sekundär handling, t.ex. "Avbryt" bredvid en primärknapp. */
export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Avbryt' },
}

/** Låg prioritet – smälter in tills man hovrar. */
export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Läs mer' },
}

/** Destruktiv handling – t.ex. "Radera". Använd sparsamt. */
export const Danger: Story = {
  args: { variant: 'danger', label: 'Radera' },
}

/** Inaktiverat tillstånd. */
export const Disabled: Story = {
  args: { label: 'Otillgänglig', disabled: true },
}

/**
 * Översikt: alla varianter och storlekar bredvid varandra.
 * Praktiskt för designgranskning och visuell regressionstest (Chromatic).
 */
export const Översikt: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Ghost" variant="ghost" />
        <Button label="Danger" variant="danger" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button label="Small" size="small" />
        <Button label="Medium" size="medium" />
        <Button label="Large" size="large" />
      </div>
    </div>
  ),
}
