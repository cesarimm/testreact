import { styled } from 'styled-components';
import { FormCard } from '../formCard/FormCard';
import { mixinFont } from '../../../../PokedexApp.styles';

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 45px;
    padding: 20px;
    border: 5px solid #ffd700;
    background: #fffacd;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    .card-image {
        .image {
            height: 150px;
            width: 150px;
        }
    }
    .card-container {
        h1 {
            ${(props) => mixinFont('22px', '#000', 'PokemonSolid')}
        }
        p {
            ${(props) => mixinFont('18px', '#000')}
        }
    }
`;

export const CardContainer = ({ pokemonData, updatePokemon, deletePokemon }) => {
    const { name, sprites, types, base_experience } = pokemonData;

    return (
        <DivCard>
            <div className="card-image">
                <img className={'image'} src={sprites.front_shiny} alt="" />
            </div>
            <div className="card-container">
                <h1>{name.toUpperCase()}</h1>
                <p>Tipo {types[0].type.name}</p>
                <p>Experiencia {base_experience}</p>
            </div>
            <FormCard qty={pokemonData.qty} updatePokemon={updatePokemon} deletePokemon={deletePokemon} />
        </DivCard>
    );
};
