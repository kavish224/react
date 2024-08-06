import React, {useContext} from 'react'
import UserContextProvider from './context/userContextProvider'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
      <h1>Kavish </h1>
    </UserContextProvider>
  )
}

export default App
