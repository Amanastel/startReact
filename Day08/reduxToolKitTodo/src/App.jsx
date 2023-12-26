import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  return (
    <>
      <h1>Learn Redux tool kit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
