import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Hooks } from './assets/Hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hooks />
  </StrictMode>,
)
