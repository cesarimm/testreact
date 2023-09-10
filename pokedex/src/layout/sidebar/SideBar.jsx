import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mixinFont } from '../../PokedexApp.styles';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: #333;
    color: white;
    padding: 10px;
`;

const SidebarLink = styled(Link)`
    ${(props) => mixinFont('18px', '#fff')}
    text-decoration: none;
    margin: 0 10px;
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
    ${(props) => (props.selected ? 'color: red;' : '')}
`;

export const Sidebar = () => {
    const location = useLocation();

    return (
        <SidebarContainer>
            <SidebarLink to="/search" selected={location.pathname === '/search'}>
                Buscar
            </SidebarLink>
            <SidebarLink to="/my-collection" selected={location.pathname === '/my-collection'}>
                Mi coleccion
            </SidebarLink>
            <SidebarLink to="/pokemon-analitics" selected={location.pathname === '/pokemon-analitics'}>
                Pokemon Analytics
            </SidebarLink>
        </SidebarContainer>
    );
};
