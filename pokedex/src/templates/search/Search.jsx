import { useState } from 'react';
import { SearchContainer } from './SearchContainer';

const Search = () => {
    const [pokemonSelected, setPokemonSelected] = useState({ isLoaded: 0, pokemon: {} });
    const [isLoading, setIsLoading] = useState(false);

    const setPokemon = (data) => {
        setPokemonSelected(data);
    };

    return <SearchContainer setPokemon={setPokemon} setIsLoading={setIsLoading} isLoading={isLoading} pokemonSelected={pokemonSelected} />;
};

export default Search;
