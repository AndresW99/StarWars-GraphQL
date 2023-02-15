import React from 'react';
import { Header } from '../components/Header';
import { RickAndMortyC } from '../components/RickAndMorty';

export const RickAndMorty = () => {
  return (
    <>
        <div>
          <Header />
        </div>
        <div className='p-12 grid grid-cols-12 gap-4'>
            <RickAndMortyC />
        </div>
    </>
  )
}
