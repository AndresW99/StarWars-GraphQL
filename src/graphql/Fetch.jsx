import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
    query GetLocations {
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

