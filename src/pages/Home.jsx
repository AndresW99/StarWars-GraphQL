import React from 'react';
import { Movies } from '../components/Movies';

export const Home = () => {

  return (

    <>
      <h1 className='text-3xl font-bold text-center text-teal-500'>GraphQL with React</h1>
      <div className='p-12 grid grid-cols-12 gap-4'>
        <Movies />
      </div>
    </>
  )
}
