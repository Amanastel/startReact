import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import TailvinCode from './components/TailvinCode' 

function App() {
  let obj = {
    name: 'Aman',
    age: 20,
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">Tailwin text</h1>

      <TailvinCode/>
      <Card username=" hello world" someObj={obj} btnText="click me"/>
      <Card username="Aman" btnText="vist me"/>
    </>
  );
}

export default App;
