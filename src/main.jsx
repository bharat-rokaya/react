import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculate from './App.jsx'
import NameInput from './Input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculate />
    <NameInput/>
  </StrictMode>,
)
