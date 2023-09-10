import { Bar } from 'react-chartjs-2';
import { styled } from 'styled-components';
import { ContentContainer } from '../../PokedexApp.styles';

const ContainerBar = styled(ContentContainer)``;

export const DataPokemonsContainer = ({ typeCounts }) => {
    const data = {
        labels: Object.keys(typeCounts),
        datasets: [
            {
                label: 'Cantidad de Pokémon',
                data: Object.values(typeCounts),
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Mi colección de pokemones',
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Cantidad',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Tipo de Pokémon',
                },
            },
        },
    };

    return (
        <ContainerBar>
            <Bar data={data} options={options} />
        </ContainerBar>
    );
};
