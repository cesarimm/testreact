import styled, { keyframes } from 'styled-components';
import pokeBallImg from '../../../../assets/icons/pokeball.svg';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`;

const SpinnerImage = styled.img`
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
`;

export const Spinner = () => {
    return (
        <SpinnerContainer>
            <SpinnerImage src={pokeBallImg} alt="Spinner" />
        </SpinnerContainer>
    );
};
