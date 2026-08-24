import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Designsystemets stilar (tokens + Poppins + komponent-CSS) – importeras EN gång.
import '@npa-eval/designsystem/styles.css'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
