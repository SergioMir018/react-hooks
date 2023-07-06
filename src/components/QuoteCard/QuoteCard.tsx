import React from 'react'

interface Component {
  isLoading: boolean
  quote: string
  author: string
}

const QuoteCard = ( { isLoading, quote, author }: Component ) => {
  return (
    <blockquote className={ isLoading ? 'hidden' : 'text-white mt-4 border p-4 rounded-lg' }>
      <p className='text-xl whitespace-normal w-[80%]'>
        {quote}
      </p>
      <footer className='text-lg text-end'> - {author}</footer>
    </blockquote>
  )
}

export default QuoteCard
