import { styled } from 'styled-components';
import { ContentContainer, mixinFont } from '../../PokedexApp.styles';
import { SearchForm } from './components/SearchForm';
import { Spinner } from './components/spinner/Spinner';
import { PokemonCard } from './components/pokemonCard/PokemonCard';
import pokemonesImg from '../../assets/images/pokemones2.webp';

const DivSearchContainer = styled(ContentContainer)``;

const DivForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background: #696969;
    padding: 20px;
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 160px;
        .title {
            margin: 10px;
            color: #fff;
            ${(props) => mixinFont('22px', '#fff')}
        }
        .description {
            margin: 10px;
            color: #fff;
            ${(props) => mixinFont('18px', '#fff')}
        }
    }
    .image {
        img {
            border-radius: 20px;
            width: 700px;
            height: 200px;
        }
    }
`;

const DivRecommended = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h3 {
        margin: 20px;
        align-items: start;
        width: 100%;
        ${(props) => mixinFont('22px', '#242E30', 'RobotoRegular')}
    }
    h4 {
        width: 200px;
        margin: 10px 20px;
        ${(props) => mixinFont('18px', '#242E30', 'RobotoRegular')}
    }
`;

export const SearchContainer = ({ setPokemon, setIsLoading, isLoading, pokemonSelected }) => {
    return (
        <DivSearchContainer>
            <DivForm>
                <div className="content">
                    <h2 className={'title'}>Nombre</h2>
                    <SearchForm setPokemon={setPokemon} setIsLoading={setIsLoading} />
                    <p className={'description'}>¡Puedes encontrar Pokemón por su nombre!</p>
                </div>
                {/* <div className="image">
                    <img src={pokemonesImg} alt="" />
                </div> */}
            </DivForm>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {pokemonSelected.isLoaded == 0 && <h1>Busqueda sin resultados</h1>}
                    {pokemonSelected.isLoaded == 1 && <PokemonCard data={pokemonSelected.pokemon} />}
                    {pokemonSelected.isLoaded == 2 && (
                        <>
                            <DivRecommended>
                                <h3>Sugerencias de busqueda</h3>
                                {pokemonSelected.pokemon.results.map(({ name }) => {
                                    return <h4 key={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>;
                                })}
                            </DivRecommended>
                        </>
                    )}
                </>
            )}
        </DivSearchContainer>
    );
};
