import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta = {
  title: 'Komponenter/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flikar för att växla mellan vyer. Aktiv flik markeras med NPA:s gula ' +
          'accent. Stödjer vänster/höger piltangenter och korrekta ARIA-roller.\n\n' +
          '[Visa källkod på GitHub](https://github.com/BentBeam/npa-ng-test/blob/main/packages/design-system/src/components/Tabs/Tabs.tsx)',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    tabs: [
      { label: 'Översikt', content: 'Sammanfattning av producentens rapporter och status.' },
      { label: 'Rapporter', content: 'Lista över inlämnade rapporter per kvartal.' },
      { label: 'Inställningar', content: 'Kontaktuppgifter och notisinställningar.' },
    ],
  },
}

export const AndraFlikenAktiv: Story = {
  args: {
    defaultIndex: 1,
    tabs: [
      { label: 'Översikt', content: 'Innehåll för översikt.' },
      { label: 'Rapporter', content: 'Den här fliken är aktiv från start.' },
      { label: 'Inställningar', content: 'Innehåll för inställningar.' },
    ],
  },
}
