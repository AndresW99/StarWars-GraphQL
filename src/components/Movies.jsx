import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../graphql/Fetch';

export const Movies = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allFilms.films.map(({ episodeID, director, releaseDate, title }) => (
  
        <div className='col-span-6 rounded overflow-hidden shadow-lg' key={ episodeID }>
            <h3 className=''>{title}</h3>
            
            <br />
            <b>About this location:</b>
            <p>{director}</p>
            <br />
        </div>

    ));
}