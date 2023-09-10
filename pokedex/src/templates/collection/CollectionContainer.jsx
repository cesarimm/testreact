import { styled } from 'styled-components';
import { ContentContainer, mixinFont } from '../../PokedexApp.styles';
import { Card } from './components/card/Card';

const DvTitle = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 10px;
    h2 {
        ${(props) => mixinFont('18px', '#242E30')}
        span {
            ${(props) => mixinFont('22px', '#242E30', 'PokemonSolid')}
        }
    }
    button {
        background-color: #ffcc29;
        color: #333;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        ${(props) => mixinFont('16px', '#242E30')}
        &:hover {
            background-color: #ff4d4d;
        }
    }
`;

const DivCollectionContainer = styled(ContentContainer)`
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
`;

export const CollectionContainer = ({ pokemonsCollection, deleteCollection, lastAdded }) => {
    const deletePokemons = () => {
        deleteCollection();
    };
    return (
        <>
            <DvTitle>
                <h2>
                    Último pokemón seleccionado: <span>{`${lastAdded.charAt(0).toUpperCase()}${lastAdded.slice(1)}`}</span>
                </h2>
                <button onClick={deletePokemons}>Vaciar toda mi colección</button>
            </DvTitle>
            <DivCollectionContainer>
                {pokemonsCollection.length &&
                    pokemonsCollection.map((pokemon) => {
                        return <Card key={pokemon.name} pokemonData={pokemon} />;
                    })}
            </DivCollectionContainer>
        </>
    );
};
