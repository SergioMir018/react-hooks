import React from 'react'
import useFetch from '../../hooks/useFetch'
import QuoteCard from '../QuoteCard/QuoteCard';
import ErrorFetch from '../Error/ErrorFetch';

const MultipleCustomHooks = () => {

  const { data, loading, error } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/5` );
  console.log( data );

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white mt-5 text-3xl font-semibold'> Breaking Bad Quotes </h1>
      <br />
        { loading ? (
        <div className='mt-4'>
          <h2 className='text-white animate-pulse animate-infinite animate-duration-[900ms] animate-ease-in-out'> Loading... </h2>
        </div>) : (
          <div className='max-w-[30em]'>
            {data?.map((data) => {
              return <QuoteCard key={data.author} quote={data.quote} author={data.author} />
            }) }
          </div>
      )}

      {error && <ErrorFetch />}
    </div>
  )
}

export default MultipleCustomHooks
