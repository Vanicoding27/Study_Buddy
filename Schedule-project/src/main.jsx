import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './Cards.jsx'
import Button from './Button.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Cards/>
    <Button/>
  </>
)
