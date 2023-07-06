import React from 'react'
import useFetch from '../../hooks/useFetch'
import QuoteCard from '../QuoteCard/QuoteCard';

const MultipleCustomHooks = () => {

  const fetchState = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/1` );
  console.log( fetchState );

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white mt-5 text-3xl font-semibold'> Breaking Bad Quotes </h1>
      <br />
      <div className='mt-4'>
        <h2 className='text-white animate-pulse animate-infinite animate-duration-[900ms] animate-ease-in-out'> Loading... </h2>
      </div>
      <QuoteCard />
    </div>
  )
}

export default MultipleCustomHooks
