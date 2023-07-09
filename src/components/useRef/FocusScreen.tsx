import React from 'react'

const FocusScreen = () => {
  return (
    <div className='mt-5 text-white flex flex-col items-center'>
      <h1 className='text-5xl font-semibold'>
        FocusScreen
      </h1>
      <form action="">
        <div className='flex flex-col'>
          <input
            type="text"
            className='mt-4 py-2 px-2 w-[15rem] border border-slate-400 rounded-lg focus:border-slate-200 focus:shadow-md focus:shadow-slate-700 bg-transparent outline-none'
            placeholder='name...' />
          <button
            className='mt-4 w-[7rem] p-1 translate-x-2 border font-bold rounded-md hover:-translate-y-1 hover:border-b-4 hover:border-l-2 hover:border-r-2 hover:border-b-slate-400 hover:border-l-slate-400 hover:border-r-slate-400 hover:bg-white hover:text-black active:bg-slate-500 active:text-neutral-100 active:-translate-y-1 active:border-t-2 active:border-l-2 active:border-r-2 transition-all duration-150'>
            Focus button
          </button>
        </div>
      </form>
    </div>
  )
}

export default FocusScreen
