import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RaM } from '../graphql/Fetch';

import CircleIcon from '@mui/icons-material/Circle';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { red, green, yellow } from '@mui/material/colors';

export const RickAndMortyC = () => {
  const { loading, error, data } = useQuery(GET_RaM, { context: { clientName: 'rickAndMorty' }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  
  return data.characters.results.map(({ id, name, gender, image, status, type }) => (
      <div className='col-span-12 md:col-span-6' key={ id }>
          <div className='p-2'>
            <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
              <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ image } alt="Rick And Morty" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                  <label>
                    <b>Gender:</b>
                    { 
                      gender === 'Male' ? <MaleIcon />  : <FemaleIcon /> 
                        &&
                      gender === 'unknown' ? <TransgenderIcon />  : <FemaleIcon /> 
                    }
                  </label>
                  <label >
                    <b>Status: </b>
                    {   status === 'Alive' ? <CircleIcon sx={{ color: green[300] }} /> : <CircleIcon sx={{ color: red[300] }} /> 
                      && 
                        status === 'unknown' ? <CircleIcon sx={{ color: yellow[600] }} /> : <CircleIcon sx={{ color: red[300] }} /> 
                    }
                  </label>
                  <label className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ type }</label>
              </div>
            </div>
          </div>
      </div>
  ));
}
