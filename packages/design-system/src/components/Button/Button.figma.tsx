import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/pGLg6yAxadVnI00WbgWsSt/NPA?node-id=8-32',
  {
    props: {
      variant: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ variant, disabled }) => (
      <Button variant={variant} disabled={disabled} label="Knapp" />
    ),
  },
)
