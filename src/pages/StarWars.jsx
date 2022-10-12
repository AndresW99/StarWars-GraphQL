import React from 'react';
import { Movies } from '../components/Movies';

export const StarWars = () => {


  return (
    <> 
        <div className='p-12 grid grid-cols-12 gap-4'>
          <Movies />
        </div>
    </>
  )
}
