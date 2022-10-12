import React from 'react';
import { Movies } from '../components/Movies';

export const StarWars = () => {


  return (
    <> 
        <h1 className='text-center text-2xl m-2'>List of Star Wars Movies</h1>
        <div className='p-12 grid grid-cols-12 gap-4'>
          <Movies />
        </div>
    </>
  )
}
