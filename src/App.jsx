import { useState, useCallback , useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) string += "0123456789"
    if (charAllowed) string += "!@#$%^&*()+-="
    
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)
  
  },
   [length , numberAllowed , charAllowed , setPassword])
    
  useEffect(() => {
    passwordGenerator()
  }, 
  
  [length, numberAllowed , charAllowed , passwordGenerator])


  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    
    // passwordRef.current?.setSelectionRange(0, 3)
    // window.navigator.clipboard.writeText(password)
  }, [password])
  
  return (
   

<div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-6 text-white">Password Generator</h2>
    <p className="text-base text-gray-300">Simple Steps, Strong Security.</p>
    <div className="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md max-w-xl mx-auto">
      <input
        type="text"
        value={password}
        placeholder="password"
        className="w-full bg-transparent py-3.5 px-4 text-gray-800 text-base focus:outline-none"
        readOnly
        ref = {passwordRef}
      />
      <button
      onClick={ copyPasswordToClipboard }
      
      className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
        Copy
      </button>
    </div>
    <div className="mt-8 flex items-center gap-6 max-w-xl mx-auto text-white">
      {/* Slider Section */}
      <div className="flex items-center gap-2">
        <label htmlFor="lengthRange" className="text-gray-300">
          Length: {length}
        </label>
        <input
          type="range"
          id="lengthRange"
          min="6"
          max="50"
          value={length}
          className="slider bg-[#a91079] accent-[#a91079] rounded-lg cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes Section */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="numberInput"
          defaultChecked={numberAllowed}
          className="accent-[#a91079] cursor-pointer"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput" className="text-gray-300 cursor-pointer">
          Numbers
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="characterInput"
          defaultChecked={charAllowed}
          className="accent-[#a91079] cursor-pointer"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput" className="text-gray-300 cursor-pointer">
          Characters
        </label>
      </div>
    </div>
  </div>
</div>


    

 
     
  )
}

export default App
