import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query GetMovies {
    allFilms {
            films {
                title
                director
                releaseDate
                id
                episodeID
                openingCrawl
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
                status
                type
                episode {
                    id
                    name
                    episode
                }
                location {
                    id
                    name
                    dimension
                  }
                origin {
                    id
                    name
                    dimension
                }
            }
        }
    }
`;

