import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter ] = useState(5)
  const addValue = () => {
    counter++;
    setCounter(counter)
    console.log("added", counter);
  }
  const removeValue = () => {
    if(counter <= 0){
      console.log("negative not allowed break");
      return setCounter(0)
      
    }
    counter--;
    setCounter(counter);
    console.log("rmoved", counter);
    
  }
  return (
    <>
      <h1>Kavish</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br /><br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
