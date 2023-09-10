import { styled } from 'styled-components';
import { mixinFont, transitionOpacity } from '../../../../PokedexApp.styles';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffefd5;
    margin: 20px 0;
    padding: 20px;
    border: 10px solid #f0e68c;
    border-radius: 10px;
    ${(props) => transitionOpacity('1s')}
    .pokemon-name {
        text-align: center;
        ${(props) => mixinFont('22px', '#000', 'PokemonSolid')}
    }
    .images-container {
        display: flex;
        justify-content: row;
        justify-content: center;
        align-items: center;
        .pokemon-image {
            width: 200px;
            height: 200px;
        }
    }
    .skills-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .skill {
            width: 50%;
            text-align: center;
            margin: 5px 0;
            ${(props) => mixinFont('18px', '#000')}
        }
    }
    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
        .add {
            background-color: #ffcc29;
            color: #333;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            ${(props) => mixinFont('18px', '#000')}
            transition: background-color 0.3s ease-in-out;
            &:hover {
                background-color: #f6d051;
                color: #fff;
            }
        }
    }
`;

export const PokemonCardContainer = ({ data, addPokemon }) => {
    const savePokemon = () => {
        addPokemon();
    };

    return (
        <CardContainer>
            <h2 className="pokemon-name">{data.name.toUpperCase()}</h2>
            <div className="images-container">
                <img className={'pokemon-image'} src={data.sprites.front_default} alt={data.name} />
                <img className={'pokemon-image'} src={data.sprites.back_default} alt={data.name} />
            </div>
            <div className="skills-container">
                <p className="skill">Tipo: {data.types[0].type.name}</p>
                <p className="skill">Experiencia: {data.base_experience}</p>
                <p className="skill">Altura: {data.height} dm</p>
                <p className="skill">Peso: {data.weight} hg</p>
            </div>
            <div className="btn-container">
                <button className="add" onClick={savePokemon}>
                    Añadir a mi colección
                </button>
            </div>
        </CardContainer>
    );
};
