import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Navbar/Hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App;
