import React from 'react'

import { useCounter } from '../../hooks/useCounter.ts';

export const CounterCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <div className='text-white flex flex-col items-center'>
      <h1  className='font-bold text-3xl m-3 underline decoration-dashed underline-offset-4'>Counter: { state }</h1>
      <div>
        <button onClick={ increment } className=' bg-slate-600 border-4 mr-4 p-3 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'> + 1 </button>
        <button onClick={ reset } className=' bg-slate-600 border-4 mr-4 p-3 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'> Reset </button>
        <button onClick={ decrement } className=' bg-slate-600 border-4 py-3 px-4 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'> - 1 </button>
      </div>
      
    </div>
  )
}
