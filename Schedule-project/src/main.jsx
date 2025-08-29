import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Card/>
    <Button/>
  </>
)
