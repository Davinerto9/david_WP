import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './pages/MainPage'
import DrawingCanvas from './pages/DrawingCanvas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage/>
  </StrictMode>,
)
