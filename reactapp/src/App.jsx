import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './Buttons.jsx'
import { FaRobot } from "react-icons/fa";
import AnimatedLogo from './assets/Logo.jsx'

function App() {
  

  return (
    <>
      <div>
          <AnimatedLogo />
      </div>
      <h1>T 1.0</h1>
      <div className="card">
        <Buttons />
      </div>
    </>
  )
}

export default App
