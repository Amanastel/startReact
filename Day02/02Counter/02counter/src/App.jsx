import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  

  const [counter, setCounter] = useState(15);

  const addVlues = () => {
    // counter = counter + 1
    console.log("vlaue added", Math.random());
    console.log(counter);
    setCounter(counter+1)
  }
  const removeValue = () =>{
    console.log("vlaue removed", Math.random());
    if(counter >0){
      setCounter(counter-1)
    }
   
  }

  return (
    <>
     <h1>chai aur second project on counter app</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addVlues}>add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
