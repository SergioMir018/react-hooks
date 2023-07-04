import { useState, ChangeEventHandler } from 'react';

export const useForm = <T>( initialState: T ) => {
  const [values, setValues] = useState<T>(initialState);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  };

  return {values, handleInputChange};
};