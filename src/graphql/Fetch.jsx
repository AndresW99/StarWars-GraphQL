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

export const GET_RaM = gql`
    query {
        characters(page: 1) {
        info {
            count
        }
            results {
                id
                name
                gender
                image
        }
        }
            location(id: 1) {
            id
        }
            episodesByIds(ids: [1, 2]) {
            id
        }
    }
`;

