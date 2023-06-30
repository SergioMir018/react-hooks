import { useState } from "react"

export const useCounter = ( initialState: number = 0 ) => {

  const [state, setState] = useState<number>( initialState );

  const increment = () => setState( state + 1 );

  const decrement = () => setState( state - 1 );

  const reset = () => setState( initialState );

  return { state, increment, decrement, reset};
}