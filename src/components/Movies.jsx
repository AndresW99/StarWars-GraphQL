import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/Fetch';

import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Movies = () => {
    const { loading, error, data } = useQuery(GET_MOVIES, { context: { clientName: 'starWars' }});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    
    return data.allFilms.films.map(({ episodeID, director, releaseDate, title, openingCrawl }) => (
        <div className='col-span-6 group block rounded overflow-hidden shadow-md border bg-white hover:bg-gray-400 hover:ring-sky-500 cursor-pointer' key={ episodeID }>
            <div className='p-2'>
                <h1 className='text-center text-slate-900 group-hover:text-white font-semibold'> {title}</h1>
                
                <div className='grid grid-cols-12 p-1'>
                    <div className='col-span-12'>
                        <p className='text-sm  group-hover:text-white'>{ openingCrawl }</p>   
                    </div>
                </div>
                <br />

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6'>
                        <label className='text-slate-500 group-hover:text-white text-sm'><b><VideocamIcon />Director: </b>{director}</label>
                    </div>
                    <div className='col-span-6 text-end'>
                        <label className='text-slate-500 group-hover:text-white text-sm'><b><CalendarMonthIcon />Release Date: </b>{releaseDate}</label>
                    </div>
                </div>
            </div>
        </div>
    ));
}