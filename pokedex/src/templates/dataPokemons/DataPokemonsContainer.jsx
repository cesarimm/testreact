import { Bar } from 'react-chartjs-2';
import { styled } from 'styled-components';
import { ContentContainer } from '../../PokedexApp.styles';
import { useEffect, useState } from 'react';

const colors = {
    electric: 'rgba(255, 223, 0, 0.6)',
    fire: 'rgba(255, 69, 0, 0.6)',
    water: 'rgba(0, 0, 255, 0.6)',
    plant: 'rgba(0, 128, 0, 0.6)',
    psychic: 'rgba(139, 0, 139, 0.6)',
    fighting: 'rgba(255, 20, 147, 0.6)',
};

const ContainerBar = styled(ContentContainer)``;

export const DataPokemonsContainer = ({ typeCounts }) => {
    const [colorsBar, setColorsBar] = useState([]);

    useEffect(() => {
        const nameKeys = Object.keys(typeCounts);
        const colorsAux = [];
        nameKeys.map((name) => {
            const aux = colors[name] ?? 'rgba(128, 128, 128, 0.6)';
            colorsAux.push(aux);
        });

        setColorsBar(colorsAux);
    }, []);

    const data = {
        labels: Object.keys(typeCounts),
        datasets: [
            {
                label: 'Cantidad de Pokémon',
                data: Object.values(typeCounts),
                backgroundColor: colorsBar,
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
