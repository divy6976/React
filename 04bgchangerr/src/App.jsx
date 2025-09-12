import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("lred")

  function change(color){
    setcolor(color)
  }

  return (
  
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-4 rounded-3xl shadow-lg px-3 py-2 m-6 bg-white">
      <button onClick ={()=> change("red")} 
       className="outline-none px-4 rounded-full text-white shadow-lg bg-red-500">
        Red
      </button>
      <button onClick ={()=> setcolor("green")} 
      className="outline-none px-4 rounded-full text-white shadow-lg bg-green-500">
        Green
      </button>
      <button  onClick ={()=> setcolor("violet")}  className="outline-none px-4 rounded-full text-white shadow-lg bg-blue-500">
        Blue
      </button>
    </div>
  </div>
</div>
     
    
  )
}

export default App