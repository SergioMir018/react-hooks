import { useState, ChangeEventHandler } from 'react';
import { FormStateHook } from '../types';

export const useForm = ( initialState: FormStateHook ) => {
  const [values, setValues] = useState<FormStateHook>(initialState);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  };

  return {values, handleInputChange};
};