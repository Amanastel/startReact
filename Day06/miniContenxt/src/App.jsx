import './App.css'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Aman start to leran react</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
