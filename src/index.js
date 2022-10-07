import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});



client
  .query({
    query: gql`
    query Query {
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
    `,
  })
  .then((result) => console.log(result));

root.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


reportWebVitals();
