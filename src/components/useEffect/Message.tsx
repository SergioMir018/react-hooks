import React, { useEffect } from 'react'

const Message = () => {

  useEffect(() => {
    console.log('component rendered'); 
  
    return () => {
      console.log('component not rendered');
    }
  }, []);
  

  return (
    <div className='mt-2 text-white'>
      <h3 className='text-5xl'> This is great! </h3>
    </div>
  )
}

export default Message
