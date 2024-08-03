import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const myObj = {
    name: "kavish",
    age: 20
  }
  return (
    <>
      <h1 className='bg-red-100 text-black p-4 rounded-xl'>Tailwind test</h1>

      <Card someObj={myObj} />
      <Card />

    </>
  )
}

export default App
