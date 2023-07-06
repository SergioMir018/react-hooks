import React, { useEffect, useState } from 'react'

interface Coords {
  x: number,
  y: number
}


const Message = () => {

  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {

    const mouseMove = (event: MouseEvent) => {
      const coords = { x: event.x, y: event.y };

      setCoords(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);


  return (
    <div className='mt-2 text-white'>
      <h3 className='text-5xl'> This is great! </h3>
      <p className='mt-3 text-center'>
        x:{x} y:{y}
      </p>
    </div>
  )
}

export default Message
