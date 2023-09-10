import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { get } from '../../../functions/services';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px;
`;

const Input = styled.input`
    padding: 8px;
    border: 3px solid #d3d3d3;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    outline: none;
    width: 320px;
`;

const onSubmit = (data) => {
    console.log(data);
};

export const SearchForm = ({ setPokemon, setIsLoading }) => {
    const { register, handleSubmit, watch } = useForm();

    const pokemonName = watch('pokemonName');

    useEffect(() => {
        const debounceTimer = setTimeout(async () => {
            setIsLoading(true);
            try {
                const name = pokemonName ? pokemonName.toLowerCase() : '';
                const response = await get(`pokemon/${name}`, {});
                console.log('response', response);
                if (response.data?.count) {
                    setPokemon({ isLoaded: 2, pokemon: response.data });
                } else if (response.data?.name) {
                    setPokemon({ isLoaded: 1, pokemon: response.data });
                } else {
                    setPokemon({ isLoaded: 0, pokemon: {} });
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error(error);
            }
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [pokemonName]);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Ej. Pikachu" {...register('pokemonName')} />
        </FormContainer>
    );
};
