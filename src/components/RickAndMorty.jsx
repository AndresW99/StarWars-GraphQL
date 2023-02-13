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
        <div className="w-full lg:max-w-full lg:flex h-52 ">
          <div className="h-52 lg:h-52 lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img src={ image } alt="Rick And Morty" />
          </div>
          <div className="border-r border-b border-l dark:hover:bg-lime-300 dark:bg-cyan-100 bg-slate-300 hover:bg-slate-400 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b 
          lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-2">
              <div className="text-gray-900 font-bold text-xl mb-1">
                <h1>{ name }</h1>
              </div>

              <div>
                <label className="text-sm"><b>Habitat:</b></label>
                <p className='italic'>{ origin.name }</p>
              </div>

              <div>
                <label className="text-sm"><b>Localización:</b></label>
                <p className='italic'>{ location.name }</p>
              </div>

              <div className='mt-1'>
                <label className=" text-md text-gray-700 dark:text-black-400">Tipo: <b className='italic'>{type || 'Normal'}</b></label>
              </div>
            </div>

            <div className="flex items-center">  
              <div className="text-sm">
                <label className='leading-none'>
                  <b>Status: </b>
                  {status === 'Alive' ? <CircleIcon sx={{ color: green[300] }} /> : <CircleIcon sx={{ color: red[300] }} />
                    &&
                    status === 'unknown' ? <CircleIcon sx={{ color: yellow[600] }} /> : <CircleIcon sx={{ color: red[300] }} />
                  }
                </label>
                <label className='mx-24 '>
                  <b>Gender:</b>
                  {
                    gender === 'Male' ? <MaleIcon /> : <FemaleIcon />
                      &&
                      gender === 'unknown' ? <TransgenderIcon /> : <FemaleIcon />
                  }
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  ));
}
