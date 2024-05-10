import { useCallback, useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length  , setLength] = useState(8);
  const [AllowNumber , setAllowNumber] = useState(false)
  const [AllowChar , setAllowChar] = useState(false)
  const [password , setPassword]  = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(AllowNumber) str += '0123456789';
    if(AllowChar) str+= '!@#$%^&*()_+={}<>?-'

    for(let i=1; i<=array.length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
       pass = str.charAt(char);

    } 

    setPassword(pass)


  } , [length , AllowNumber , AllowChar , setPassword])
  return (
    <>
     <div className="pt-8 flex justify-center  main w-screen h-screen bg-black">
            <div className="box h-32 w-2/4 bg-slate-800">
            <h1 className='text-white flex justify-center'><span>Password Generator</span></h1>
            <hr />
                  <div className="pl-2 pt-2 w-full input flex justify-start">
                    <input className='pl-2 w-3/4 h-8 rounded outline-0' type="text" value={password} placeholder='Password'/>
                    <button className='ml-2 h-8 w-20 rounded bg-blue-800'>Copy</button>
                  </div>

                  <div className=' pl-4'>
                    <input className='cursor-pointer' type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} />
                    <label className='text-white ml-2'>Length  {length}</label>
                    <input className='cursor-pointer ml-8' type="checkbox" defaultChecked={AllowNumber} id='numberInput' value={length} onChange={() => {setAllowNumber((prev) => !prev )}}/>
                    <label className='text-white z-10'>Numbers</label>
                  </div>

            </div>
     </div>
    </>
  )
}

export default App
