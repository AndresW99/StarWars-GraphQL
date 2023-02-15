import React from 'react';

import RickAndMorty from '../assets/rick&morty.jpg';

export const Header = () => {
  return (
    <header>
        <div className=" bg-cover bg-center">
            <div className="items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <img className='w-full h-2/3' src={ RickAndMorty } alt="Rick And Morty" />
            </div>
        </div>
    </header>
  )
}
