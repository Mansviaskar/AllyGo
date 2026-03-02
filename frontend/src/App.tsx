import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import AuthPage from './components/Auth'
import { ThemeProvider } from './contexts/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Features />
              <Footer />
            </>
          } />
          <Route path="/AllyGo/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
