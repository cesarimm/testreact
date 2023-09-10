import PokemonActionTypes from './pokemon.types';

const initialState = {
    pokemonsCollection: [],
    isEmpty: true,
    pokemonTypes: [],
};

export const PokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActionTypes.POKEMON_INIT:
            return { ...state, init: true };
        case PokemonActionTypes.POKEMON_UPDATE:
            return { ...state, ...action.payload };
        case PokemonActionTypes.POKEMON_DELETE:
            return { ...initialState };
        default:
            return state;
    }
};
