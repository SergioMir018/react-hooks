import React from 'react'
import Message from './Message';
import { FormState } from '../../types';
import { useForm } from '../../hooks/useForm';

export const SimpleForm = () => {

  const {values, handleInputChange} = useForm({
    name: '',
    email: ''
  });

  const { name, email } = values as FormState;

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
      { ( name === '123' ) && <Message /> }
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
