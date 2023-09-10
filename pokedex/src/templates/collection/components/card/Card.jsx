import { useDispatch, useSelector } from 'react-redux';
import { CardContainer } from './CardContainer';
import { updatePokemon } from '../../../../redux/pokemon/pokemon.actions';

export const Card = ({ pokemonData }) => {
    const dispatch = useDispatch();
    const pokemonPersist = useSelector((state) => state.pokemon);
    const { pokemonsCollection } = pokemonPersist;

    const updateQty = (qty = 1) => {
        const updatedPokemons = pokemonsCollection.map((item) => {
            if (item.name == pokemonData.name) {
                return { ...item, qty: parseInt(qty) };
            }
            return item;
        });
        dispatch(updatePokemon({ pokemonsCollection: [...updatedPokemons] }));
    };

    const deletePokemon = () => {
        const updatedPokemons = pokemonsCollection.filter((objeto) => objeto.name !== pokemonData.name);
        dispatch(updatePokemon({ pokemonsCollection: [...updatedPokemons] }));
    };

    return <CardContainer pokemonData={pokemonData} updatePokemon={updateQty} deletePokemon={deletePokemon} />;
};
