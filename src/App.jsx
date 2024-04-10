import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Component1 from './Component/Component1'

function App() {
  
  return (
    <>
       <Navbar/>
       <Hero/>
       <Component1/>  
    </>
  )
}

export default App
