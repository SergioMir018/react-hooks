import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import QuoteCard from '../QuoteCard/QuoteCard';
import ErrorFetch from '../Error/ErrorFetch';
import { BreakingBadAPI } from '../../types';

const MultipleCustomHooks = () => {
  const [quotes, setQuotes] = useState<number>(0);

  const { data, loading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${quotes}`);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector('input');
    
    if (input) {
      const numQuotes = parseInt(input.value);
      setQuotes(numQuotes);
    }

  }

  return (
    <div className='mt-5 relative flex flex-col items-center'>
      <h1 className='text-white text-3xl font-semibold'> Breaking Bad Quotes </h1>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-5 mt-5 text-white'>
          <input type="text" className='w-8 h-8 px-2 bg-transparent border rounded-lg font-semibold' />
          <button className='border-2 h-8 px-2 -mb-4 rounded-md font-semibold hover:bg-white hover:-translate-y-1 hover:text-black hover:border-green-500 hover:border-b-4 transition duration-200' type='submit'> More quotes </button>
        </div>
      </form>
      <br />
      <div>
        {loading ? (
          <div className='mt-4'>
            <h2 className='text-white animate-pulse animate-infinite animate-duration-[900ms] animate-ease-in-out'> Loading... </h2>
          </div>) : (
          <div className='max-w-[30em]'>
            {data?.map((data: BreakingBadAPI, index: number) => {
              return <QuoteCard key={index} quote={data.quote} author={data.author} />
            })}
          </div>
        )}
      </div>

      {error && <ErrorFetch />}
    </div>
  )
}

export default MultipleCustomHooks
