import React, { useState } from 'react'
import MultipleCustomHooks from '../MultipleCustomHooks/MultipleCustomHooks'

function RealExampleRef() {
  
  const [show, setShow] = useState<boolean>(false);

  function handleToggle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(!show);
  }
  
  return (
    <div className='text-white flex flex-col items-center'>
        <h1 className='text-5xl mt-4'>
            Ref Real Case 
        </h1>
        <button type="button" className='outline-none font-semibold border mt-4 py-1 px-2 rounded-md hover:bg-white hover:text-black transition-all duration-150 active:border-slate-200 active:bg-slate-600 active:text-slate-400' onClick={handleToggle}>Toggle quotes</button>
        {show && <MultipleCustomHooks />}
    </div>
  )
}

export default RealExampleRef
