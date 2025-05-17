import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
// Ant Design v5 doesn't require explicit CSS imports
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
