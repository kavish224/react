import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (characterAllowed) {
      str += "!@#$^&*";
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <h1 className="text-4xl text-center text-white pt-8">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-3xl px-5 py-2.5 my-9 text-orange-400 bg-gray-600 pt-5 ">
        <div className="flex shadow-lg rounded-3xl overflow-hidden mb-4 ">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPass}>Copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <label>Length: {length}</label>
          <input type="range" min={8} max={100} value={length} className=" cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
          <div className="flex items-center gap-x-1">
            <label htmlFor="numberInput" className="py-2 pr-1" >Numbers</label>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="characterInput" className="py-2 pr-1">Characters</label>
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={() => { setCharacterAllowed((prev) => !prev) }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
