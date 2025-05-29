
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/themeContext.jsx'
import { useState, useEffect } from 'react'
import Pl from './Components/Pl.jsx'

const Root = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (can be replaced with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      {isLoading ? <Pl /> : <App />}
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
