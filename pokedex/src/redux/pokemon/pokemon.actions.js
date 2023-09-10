import PokemonActionTypes from './pokemon.types';

export const initPokemon = () => ({ type: PokemonActionTypes.POKEMON_INIT });
export const updatePokemon = (data) => ({ type: PokemonActionTypes.POKEMON_UPDATE, payload: { ...data } });
export const deletePokemon = () => ({ type: PokemonActionTypes.POKEMON_DELETE });
