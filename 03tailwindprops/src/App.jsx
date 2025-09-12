import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
 

  return (
    <>
   <h2 className='bg-'></h2>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
   <Card username="amar" btnText="click me"/>
   <Card username="divy" btnText="visit me"/>
    </>
  )
}

export default App
