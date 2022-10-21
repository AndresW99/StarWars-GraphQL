import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RaM } from '../graphql/Fetch';

import CircleIcon from '@mui/icons-material/Circle';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { red, green, yellow } from '@mui/material/colors';
import { PacmanLoader } from 'react-spinners';
import { Error } from './Error';

export const RickAndMortyC = () => {
  const { loading, error, data } = useQuery(GET_RaM, { context: { clientName: 'rickAndMorty' }});

  if (loading) return( 
      <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="min-h-screen flex justify-center items-center">
          <PacmanLoader color="#36d7b7" /> 
        </div>
      </div>
    ) 
    if (error) return <div><Error /></div>;

  
  return data.characters.results.map(({ id, name, gender, image, status, type, location, origin }) => (
      <div className='col-span-12 md:col-span-6' key={ id }>
        <div className='p-2'>
          <div className="cursor-pointer flex flex-col items-center bg-white dark:bg-sky-200 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={ image } alt="Rick And Morty" />
            <div className="flex flex-col p-4">
                <h5 className="mb-2 -mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>

                <b className='text-sm'>Visto por primera vez:</b>
                <p className='text-slate-500 dark:text-black'>{ origin.name }</p>
                
                <b className='text-sm mt-2'>Visto por última vez:</b>
                <p className='text-slate-500'>{ location.name }</p>

                <div className='grid grid-cols-12'>
                  <div className='col-span-6 text-start'>
                    <label>
                      <b>Gender:</b>
                      { 
                        gender === 'Male' ? <MaleIcon />  : <FemaleIcon /> 
                          &&
                        gender === 'unknown' ? <TransgenderIcon />  : <FemaleIcon /> 
                      }
                    </label>
                  </div>
                  <div className='col-span-6 text-end'>
                    <label>
                      <b>Status: </b>
                      {   status === 'Alive' ? <CircleIcon sx={{ color: green[300] }} /> : <CircleIcon sx={{ color: red[300] }} /> 
                        && 
                          status === 'unknown' ? <CircleIcon sx={{ color: yellow[600] }} /> : <CircleIcon sx={{ color: red[300] }} /> 
                      }
                    </label>
                  </div>
                </div>
                <label className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ type }</label>
            </div>
          </div>
        </div>
      </div>
  ));
}
