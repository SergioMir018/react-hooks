import React, { useState } from 'react'

export const CustomHookSimpleForm = () => {

  interface FormState {
  name: string;
  email: string;
}

  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: ''
  });

  const { name, email } = formState;

const handleInputChange = ( e:React.ChangeEvent<HTMLInputElement> ) => { 
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex flex-col items-center mt-3'>
      <h1
      className='text-7xl text-white'
      > useEffect exercise </h1>
      <div className='group flex flex-col gap-4 mt-5'> 
        <input 
        type="text" 
        name='name' 
        value={ name } 
        autoComplete='off' 
        onChange= { handleInputChange } 
        placeholder='Name...'/>
        <input 
        type="email" 
        name='email' 
        value={ email } 
        autoComplete='off' 
        onChange={ handleInputChange } 
        placeholder='email@gmail.com' />
      </div>
      <div className='w-1/4 flex justify-center'>
        <button 
          className={`font-semibold bg-slate-100 mt-4 px-3 py-1 border-4 rounded-md 
          ${name === '' ? 'hover:translate-x-28 transition duration-200': email === '' ? 'hover:-translate-x-28 transition duration-200' : 'hover:bg-purple-500 hover:rounded-xl hover:text-white hover:shadow-neon active:bg-purple-300 active:border-purple-600 active:text-slate-400 active:shadow-none transition-all duration-200'}`}
          disabled={name === '' || email === ''}
        >
          submit
        </button>
      </div>
      
    </div>
  )
}
