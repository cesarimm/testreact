import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PokemonReducer } from './pokemon/pokemon.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['pokemon'],
};

const appReducer = combineReducers({
    pokemon: PokemonReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
