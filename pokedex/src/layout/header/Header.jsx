import { styled } from 'styled-components';
import pokedexImg from '../../assets/images/pokename.png';

const HeaderContainer = styled.div``;

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={pokedexImg} alt="" />
        </HeaderContainer>
    );
};
