import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'

const meta = {
  title: 'Komponenter/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Kort förklarande text som visas vid hover eller tangentbordsfokus. ' +
          'Kopplas till sitt element via `aria-describedby`. Använd för korta ' +
          'förtydliganden – inte för information som måste läsas.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-ng-test/blob/main/packages/design-system/src/components/Tooltip/Tooltip.tsx)',
      },
    },
  },
  argTypes: {
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
  args: { content: 'Rapporten uppdateras varje natt kl 02:00.', placement: 'top' },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

/** Hovra eller tabba till knappen för att se tooltipen. */
export const Standard: Story = {
  render: (args) => (
    <div style={{ padding: '3rem' }}>
      <Tooltip {...args}>
        <Button label="Hovra över mig" variant="secondary" />
      </Tooltip>
    </div>
  ),
}

/** Tooltip på en informationsikon. */
export const PåIkon: Story = {
  args: { content: 'Organisationsnummer i formatet ÅÅMMDD-XXXX.' },
  render: (args) => (
    <div style={{ padding: '3rem' }}>
      <Tooltip {...args}>
        <span
          style={{
            display: 'inline-flex',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'var(--color-status-info-bg)',
            color: 'var(--color-status-info)',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          i
        </span>
      </Tooltip>
    </div>
  ),
}

/** Alla fyra placeringar. */
export const Placeringar: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '2.5rem', padding: '4rem' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((p) => (
        <Tooltip key={p} content={`Placering: ${p}`} placement={p}>
          <Button label={p} variant="ghost" size="small" />
        </Tooltip>
      ))}
    </div>
  ),
}
