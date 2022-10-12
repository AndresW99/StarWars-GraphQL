import { Home } from "../pages/Home";
import { RickAndMorty } from "../pages/RickAndMorty";
import { StarWars } from "../pages/StarWars";

export const routes = [
    {
        path: 'home',
        to: 'home',
        Component: Home,
        name: 'Home'
    },
    {
        path: 'star-wars',
        to: 'star-wars',
        Component: StarWars,
        name: 'Star Wars'
    },
    {
        path: 'rick-and-morty',
        to: 'rick-and-morty',
        Component: RickAndMorty,
        name: 'Rick And Morty'
    },
]