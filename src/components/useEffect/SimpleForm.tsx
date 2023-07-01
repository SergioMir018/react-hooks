import React, { useEffect, useState } from 'react'
import Message from './Message';

export const SimpleForm = () => {

  interface FormState {
  name: string;
  email: string;
}

  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: ''
  });

  const { name, email } = formState;
  
  useEffect(() => {
    console.log('the name changed');
  },[ name ] );

  useEffect(() => {
    console.log('the email changed');
  },[ email ] );

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
      { ( name === '123' ) && <Message /> }
    </div>
  )
}
