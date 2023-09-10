//import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Collection from '../templates/collection/Collection';
import DataPokemons from '../templates/dataPokemons/DataPokemons';
import Search from '../templates/search/Search';

// export const CollectionPage = lazy(() => import('../templates/collection/Collection'));
// export const DataPokemonsPage = lazy(() => import('../templates/dataPokemons/DataPokemons'));
// export const SearchPage = lazy(() => import('../templates/search/Search'));

export const routesList = [
    { link: '/', component: <Navigate to={'/search'} /> },
    { link: '/search', component: <Search /> },
    { link: '/my-collection', component: <Collection /> },
    { link: '/pokemon-analitics', component: <DataPokemons /> },
    { link: '*', component: <Navigate to={'/search'} /> },
];
