import { useState } from 'react'

const useForm = ( initialState = {} ) => {
  const [values, setValues] = useState(initialState);
}

export default useForm
