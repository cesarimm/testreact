import { PokemonCardContainer } from './PokemonCardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemon } from '../../../../redux/pokemon/pokemon.actions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const PokemonCard = ({ data }) => {
    const navigate = useNavigate();
    const pokemonPersist = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();
    const { pokemonsCollection } = pokemonPersist;

    const showAlert = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pokemon agregado con éxito',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            navigate('/my-collection');
        });
    };

    const addPokemon = () => {
        const pokemonData = [...pokemonsCollection] ?? [];

        if (pokemonsCollection.length > 0) {
            const filteredPokemons = pokemonsCollection.filter((pokemon) => {
                return pokemon.name == data.name;
            });

            if (filteredPokemons.length > 0) {
                const updatedPokemons = pokemonData.map((item) => {
                    if (item.name == data.name) {
                        return { ...item, qty: item.qty + 1 };
                    }
                    return item;
                });

                dispatch(updatePokemon({ pokemonsCollection: [...updatedPokemons], lastAdded: data.name }));
            } else {
                pokemonData.push({ ...data, qty: 1 });
                dispatch(updatePokemon({ pokemonsCollection: [...pokemonData], lastAdded: data.name }));
            }
        } else {
            pokemonData.push({ ...data, qty: 1 });
            dispatch(updatePokemon({ pokemonsCollection: [...pokemonData], lastAdded: data.name, isEmpty: false }));
        }

        showAlert();
    };

    return (
        <>
            <PokemonCardContainer data={data} addPokemon={addPokemon} />
        </>
    );
};
