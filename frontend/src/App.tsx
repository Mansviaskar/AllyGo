import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import AuthPage from './components/Auth'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { ThemeProvider } from './contexts/theme-provider'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
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
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
