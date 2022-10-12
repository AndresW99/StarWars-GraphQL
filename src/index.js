import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const starWars = new HttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  //cache: new InMemoryCache(),
});

const rickAndMorty = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
  //cache: new InMemoryCache(),
});

const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'rickAndMorty',
    rickAndMorty,
    starWars
  ),
  cache: new InMemoryCache()
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


reportWebVitals();
