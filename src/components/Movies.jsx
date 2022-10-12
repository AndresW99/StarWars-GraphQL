import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/Fetch';

export const Movies = () => {
    const { loading, error, data } = useQuery(GET_MOVIES, { context: { clientName: 'starWars' }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    
    return data.allFilms.films.map(({ episodeID, director, releaseDate, title }) => (
        <div className='col-span-6 group block rounded overflow-hidden shadow-lg hover:bg-sky-500 hover:ring-sky-500 cursor-pointer' key={ episodeID }>
            <div className='p-2'>
                <h1 className='text-center text-slate-900 group-hover:text-white font-semibold'>{title}</h1>
                
                <br />
                <b className='group-hover:text-white'>About this location:</b>
                <p className='text-slate-500 group-hover:text-white text-sm'><b>Director: </b>{director}</p>
                <br />
            </div>
        </div>
    ));
}