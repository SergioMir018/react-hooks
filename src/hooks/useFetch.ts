import { useEffect, useState } from 'react';
import { BreakingBadAPI } from '../types';

interface StateBreakingBadAPI {
  data: BreakingBadAPI[] | null
  loading: boolean
  error: Error | null
}

const useFetch = ( url: string ) => {
  const [state, setState] = useState<StateBreakingBadAPI>({
    data: null, 
    loading: true, 
    error: null
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null
    });

    fetch( url )
      .then( response => response.json() )
      .then( responseData => {
        setState({
          data: responseData,
          loading: false,
          error: null
        })
      });
  }, [ url ]);

  return state;
}

export default useFetch
