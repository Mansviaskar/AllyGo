import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Navbar/Hero'
import { Features } from './components/Navbar/Features'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  )
}

export default App;
