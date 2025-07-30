import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './fake/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<App2></App2>
  </StrictMode>,
)
