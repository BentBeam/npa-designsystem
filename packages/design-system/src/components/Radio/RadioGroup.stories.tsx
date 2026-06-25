import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { RadioGroup } from './RadioGroup'

const OPTIONS = [
  { label: 'E-post', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Brev', value: 'post' },
]

const meta = {
  title: 'Komponenter/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Grupp av radioknappar för att välja **ett** alternativ. Hela gruppen ' +
          'ligger i en fieldset/legend och knapparna delar namn för korrekt ' +
          'tangentbords- och skärmläsarstöd.',
      },
    },
  },
  args: { legend: 'Hur vill du bli kontaktad?', options: OPTIONS },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Interaktiv – välj ett alternativ och se valet uppdateras. */
export const Standard: Story = {
  render: (args) => {
    const [value, setValue] = useState('email')
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}

export const MedInaktiveratAlternativ: Story = {
  render: (args) => {
    const [value, setValue] = useState('email')
    return (
      <RadioGroup
        {...args}
        options={[...OPTIONS, { label: 'Fax (ej tillgängligt)', value: 'fax', disabled: true }]}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const HelaGruppenInaktiverad: Story = {
  args: { disabled: true, value: 'sms' },
}
