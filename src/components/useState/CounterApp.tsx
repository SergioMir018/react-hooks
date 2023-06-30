import React, { useState } from 'react';

export const CounterApp  = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className='text-white flex flex-col items-center'>
      <div className='font-bold text-3xl m-3 underline decoration-dashed underline-offset-4'>
        Counter: <span className='ml-1'> { counter } </span>
      </div>
      <button onClick={ () => setCounter( counter + 1 ) }
      className=' bg-slate-600 border-4 p-3 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'
      >
        + 1
      </button>
    </div>
  )
}
