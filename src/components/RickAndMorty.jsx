import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RaM } from '../graphql/Fetch';

import CircleIcon from '@mui/icons-material/Circle';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { red, green, yellow, pink, blue, purple } from '@mui/material/colors';

import { PacmanLoader } from 'react-spinners';
import { Error } from './Error';

export const RickAndMortyC = () => {
  const { loading, error, data } = useQuery(GET_RaM, { context: { clientName: 'rickAndMorty' }});

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  if (loading) return( 
      <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="min-h-screen flex justify-center items-center">
          <PacmanLoader color="#36d7b7" /> 
        </div>
      </div>
    ) 
    if (error) return <div><Error /></div>;

  
  return memoizedData.characters.results.map(({ id, name, gender, image, status, type, location, origin }) => (

    <div className="col-span-6 border border-cyan-400 rounded cursor-pointer bg-gray-500" key={ id }>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'>
          <img className='w-full' src={ image } alt="Rick and Morty" />
        </div>
        <div className='col-span-6 relative'>
          <h1 className='italic text-2xl mt-2 text-center text-white hover:text-lime-300'><b>{ name }</b></h1>
          <div className='grid grid-cols-12 p-2'>
            <div className='col-span-12 mt-1'>
              <label className='text-sm text-stone-300'>Origen: </label>
              <h1 className='text-xl text-white hover:text-lime-300'>{ origin.name }</h1>
            </div>

            <div className='col-span-12 mt-3'>
              <label className='text-sm text-stone-300'>Visto por ultima vez: </label>
              <h1 className='text-xl text-white hover:text-lime-300'>{ location.name }</h1>
            </div>
            <div className='col-span-12 mt-3'>
              <label className='text-sm text-stone-300'>Tipo: </label>
              <h1 className='text-xl text-white hover:text-lime-300'>{ type  || 'Normal'}</h1>
            </div>
            <div className='col-span-6 mt-2'>
              <label className='absolute bottom-4 text-white'>
                <b>{ status === 'Alive' ? 'Vivo ' : 'Muerto ' && status === 'unknown' ? 'Desaparecido ' : 'Muerto ' }</b>
                {
                  status === 'Alive' ? <CircleIcon sx={{ color: green[300] }} /> : <CircleIcon sx={{ color: red[300] }} />
                    &&
                  status === 'unknown' ? <CircleIcon sx={{ color: yellow[600] }} /> : <CircleIcon sx={{ color: red[300] }} />
                }
              </label>
            </div>
            <div className='col-span-6 mt-2'>
              <label className='absolute bottom-4 text-white'>
                <b>{ gender === 'Male' ? 'Masculino ' : 'Femenino ' && gender === 'unknown' ? 'Sin genero ' : 'Femenino ' }</b>
                {
                  gender === 'Male' ? <MaleIcon sx={{ color: blue[300] }} /> : <FemaleIcon sx={{ color: pink[300] }} />
                    &&
                  gender === 'unknown' ? <TransgenderIcon sx={{ color: purple[200] }} /> : <FemaleIcon sx={{ color: pink[300] }} />
                }
              </label>
            </div>
          </div>   
        </div>        
      </div>
    </div>
  ));
}
