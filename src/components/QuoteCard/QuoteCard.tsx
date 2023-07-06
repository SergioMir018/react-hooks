import React from 'react'

interface Component {
  quote: string
  author: string
}

const QuoteCard = ( { quote, author }: Component ) => {
  return (
    <blockquote className='text-white mt-4 border p-4 rounded-lg'>
      <p className='text-xl whitespace-normal w-[80%]'>
        {quote}
      </p>
      <footer className='text-lg text-end'> - {author}</footer>
    </blockquote>
  )
}

export default QuoteCard
