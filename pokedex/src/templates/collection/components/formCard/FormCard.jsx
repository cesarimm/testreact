import { useState } from 'react';

import styled from 'styled-components';
import { mixinFont } from '../../../../PokedexApp.styles';

const pokemonColors = {
    green: '#4CAF50',
    red: '#F44336',
};

const FormContainer = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const Label = styled.label`
    display: flex;
    margin-left: 25px;
    font-size: 16px;
`;

const Input = styled.input`
    ${(props) => mixinFont('16px', '#000')}
    padding: 5px;
    margin: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    background-color: ${(props) => (props.danger ? pokemonColors.red : pokemonColors.green)};
    ${(props) => mixinFont('16px', '#fff')}
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.danger ? '#D32F2F' : '#388E3C')};
    }
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

export const FormCard = ({ qty, updatePokemon, deletePokemon }) => {
    const [quantity, setQuantity] = useState(qty);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
        setError('');
    };

    const updateQuantity = () => {
        if (quantity === '') {
            setError('Por favor ingrese un número valido.');
        } else {
            updatePokemon(quantity);
        }
    };

    const deleteItem = () => {
        setQuantity('');
        setError('');
        deletePokemon();
    };

    return (
        <FormContainer>
            <Label htmlFor="quantity">Cantidad: </Label>
            <Input type="number" id="quantity" name="quantity" value={quantity} onChange={handleChange} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button onClick={updateQuantity}>Guardar</Button>
            <Button danger onClick={deleteItem}>
                Eliminar
            </Button>
        </FormContainer>
    );
};
