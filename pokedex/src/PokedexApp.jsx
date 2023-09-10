import { styled } from 'styled-components';
import { GlobalStyle } from './global.styles';
import { Sidebar } from './layout/sidebar/SideBar';
import { Header } from './layout/header/Header';
import { RoutesPokedex } from './routes/RoutesPokedex';

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1180px;
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #f0f0f0;
`;

export const PokedexApp = () => {
    return (
        <>
            <GlobalStyle />
            <div style={{ background: '#f0f0f096' }}>
                <ContainerApp className="App">
                    <Header />
                    <Sidebar />
                    <RoutesPokedex />
                </ContainerApp>{' '}
            </div>
        </>
    );
};
