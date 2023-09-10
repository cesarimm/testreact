import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataPokemonsContainer } from './DataPokemonsContainer';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const DataPokemons = () => {
    const dispatch = useDispatch();
    const pokemonPersist = useSelector((state) => state.pokemon);
    const { pokemonsCollection } = pokemonPersist;
    const [pokemonAnalitics, setPokemonAnalitics] = useState([]);

    useEffect(() => {
        console.log(pokemonAnalitics);
    }, [pokemonAnalitics]);

    useEffect(() => {
        const typeCounts = {};

        pokemonsCollection.forEach((pokemon) => {
            pokemon.types.forEach((typeData) => {
                const typeName = typeData.type.name;
                typeCounts[typeName] = (typeCounts[typeName] || 0) + 1;
            });
        });

        setPokemonAnalitics(typeCounts);
    }, []);

    return <div className="App">{pokemonAnalitics && <DataPokemonsContainer typeCounts={pokemonAnalitics} />}</div>;
};

export default DataPokemons;
