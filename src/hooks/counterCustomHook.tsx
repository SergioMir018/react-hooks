import React from 'react'

export const counterCustomHook = () => {
  return (
    <div className='text-white flex flex-col items-center'>
      <h1  className='font-bold text-3xl m-3 underline decoration-dashed underline-offset-4'>Counter: { 0 }</h1>
      <div>
        <button className=' bg-slate-600 border-4 mr-4 p-3 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'> + 1 </button>
        <button className=' bg-slate-600 border-4 py-3 px-4 rounded-md hover:bg-slate-200 hover:text-black hover:rounded-3xl hover:transition-all duration-500 ease-in-out font-semibold text-lg active:bg-slate-400'> - 1 </button>
      </div>
      
    </div>
  )
}
