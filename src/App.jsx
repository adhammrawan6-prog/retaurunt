import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './Menu/Menu'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App
