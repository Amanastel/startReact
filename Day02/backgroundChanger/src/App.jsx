import { useState } from 'react'
import './App.css'

function App() {

  const [color, steColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200 '
     style={{backgroundColor:color}}
     
     >
      <div className='fixed flex flex-wrap 
       justify-center bottom-12 inset-x-0 px-2' > 

       <div className='flex flex-wrap justify-normal gap-3 shadow-lg bg-white
        px-2 py-2 rounded-xl
       '>
        <button onClick={() => steColor("red")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}
        >red</button>

        <button onClick={() => steColor("green")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
        style={{backgroundColor: "green"}}
        >green</button>

        <button onClick={() => steColor("blue")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
        style={{backgroundColor: "blue"}}
        >blue</button>

        <button onClick={() => steColor("black")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
        style={{backgroundColor: "black"}}
        >black</button>
       </div>
       </div>
     </div>
    </>
  )
}

export default App
