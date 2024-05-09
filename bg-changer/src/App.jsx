import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState('black');

  function colors (e) {
    setColor(e)
  }

  return (
   <>
       <div className='main pb-8 flex justify-center items-end w-screen h-screen' style={{backgroundColor:color}}>
          <div  className='flex justify-evenly rounded-md  w-3/4 h-10 bg-white'>
            <button onClick={()=>colors('blue')} className='text-blue-600'>blue</button>
            <button onClick={()=>colors('red')} className='text-red-400'>red</button>
            <button onClick={()=>colors('green')} className='text-green-600'>green</button>
            <button onClick={()=>colors('yellow')} className='text-yellow-400'>yellow</button>
            <button onClick={()=>colors('pink')} className='text-pink-600'>pink</button>
            <button onClick={()=>colors('purple')} className='text-purple-600'>purple</button>
            <button onClick={()=>colors('white')} className='text-white'>white</button>
          </div>
       </div> 
   </>
  )
}

export default App
