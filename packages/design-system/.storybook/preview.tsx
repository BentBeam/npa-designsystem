import type { Preview } from '@storybook/react-vite'

// Laddar NPA design tokens + Poppins globalt, så ALLA stories ärver utseendet.
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    // Ordningen på sidorna i vänstermenyn
    options: {
      storySort: {
        order: [
          'Kom igång',
          ['Introduktion', 'Design Tokens', 'Figma-workflow'],
          'Komponenter',
        ],
      },
    },

    // Bakgrunder att testa komponenter mot (matchar NPA:s ytfärger)
    backgrounds: {
      options: {
        ljus: { name: 'Ljus (Dark white)', value: '#fafafa' },
        ljusblå: { name: 'Ljusblå', value: '#eff4f6' },
        vit: { name: 'Vit yta', value: '#ffffff' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'ljus' },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' – visa tillgänglighetsproblem i testpanelen
      // 'error' – låt CI faila vid problem
      // 'off'   – stäng av helt
      test: 'todo',
    },
  },
}

export default preview
