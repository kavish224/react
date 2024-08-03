import { useState } from "react"

function App() {
  const [color, setColor] = useState("golden");

  return (
    <>

      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "orange" }}>orange</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "brown" }}>brown</button>
            <button onClick={() => setColor("maroon")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "maroon" }}>maroon</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "purple" }}>purple</button>
            <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm" style={{ backgroundColor: "lavender" }}>lavender</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
