import { useEffect, useRef, useState } from 'react';
import { BreakingBadAPI } from '../types';

interface StateBreakingBadAPI {
  data: Array<BreakingBadAPI> | null
  loading: boolean
  error: Error | null
}

const useFetch = (url: string, clickCount: number) => {

  const isMounted = useRef(true);

  const [state, setState] = useState<StateBreakingBadAPI>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      isMounted.current =false;
    }
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null
    });

    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        if (isMounted.current) {
          setState({
            data: responseData,
            loading: false,
            error: null
          });
        }
      });
  }, [url, clickCount]);

  return state;
}

export default useFetch
