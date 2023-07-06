import React from 'react'
import { FormStateHook } from '../../types';
import { useForm } from '../../hooks/useForm';

export const CustomHookSimpleForm = () => {

  const { values, handleInputChange } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = values as FormStateHook;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-3'>
      <h1
        className='text-7xl text-white'
      > useEffectCustomHook exercise </h1>
      <div className='group flex flex-col gap-4 mt-5'>
        <input
          className='inputUseState'
          type="text"
          name='name'
          value={name}
          autoComplete='off'
          onChange={handleInputChange}
          placeholder='Name...' />
        <input
          className='inputUseState'
          type="email"
          name='email'
          value={email}
          autoComplete='off'
          onChange={handleInputChange}
          placeholder='email@example.com' />
        <input
          className='inputUseState'
          type="password"
          name='password'
          value={password}
          onChange={handleInputChange}
          placeholder='password...' />
      </div>
      <div className='w-1/4 flex justify-center'>
        <button type='submit'
          className={`font-semibold bg-slate-100 mt-4 px-3 py-1 border-4 rounded-md 
          ${name === '' ? 'hover:translate-x-28 transition duration-200' : email === '' ? 'hover:-translate-x-28 transition duration-200' : password === '' ? 'hover:translate-y-28 transition duration-200' : 'hover:bg-purple-500 hover:rounded-xl hover:text-white hover:shadow-neon active:bg-purple-300 active:border-purple-600 active:text-slate-400 active:shadow-none transition-all duration-200'}`}
          disabled={name === '' || email === ''}
        >
          submit
        </button>
      </div>

    </form>
  )
}
