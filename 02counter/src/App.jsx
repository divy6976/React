import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'



const App = () => {
 const[count,setCount]=useState(5)

 const increment=()=>{
  if(count<20){
  setCount(count+1)
  }

 }
 const decrement=()=>{
  if(count >0){
  setCount(count-1)
  
  }
 }

  return (
    <div>
     
      <h1>Counter Project</h1>


      <h2> your update number is {count} </h2>
     
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>

      
    </div>
  )
}

export default App
