import { useState } from 'react'
import NavBar from './components/nav'
import NavBar2 from './components/nav2' 
import Carrucel from './components/carrusel'
import Ofertas from './components/ofertas'
import Carrucel2 from './components/carrusel2'
import './App.css'

function App() {
  

  return (
    <>
      <NavBar/>
      <NavBar2/>
      <Carrucel/>
      <Ofertas/>
      <Carrucel2/>
    </>
  )
}

export default App
