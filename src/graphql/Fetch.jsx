import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query GetMovies {
    allFilms {
            films {
            title
            director
            releaseDate
                speciesConnection {
                    species {
                    name
                    classification
                        homeworld {
                            name
                        }   
                    }
                }
                id
                episodeID
            }
        }
    }
`;

