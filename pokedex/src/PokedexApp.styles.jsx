import { styled } from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: center;
    width: 100%;
    min-width: 1180px;
    height: 100vh;

    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
        width: 3px;
        height: 3px;
        background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
        display: none;
        background-color: #406386;
        border-radius: 1.5px;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

{
    /*Mixins section*/
}

{
    /*Minxin for font*/
}
export const mixinFont = (fontSize = '16px', color = '#000', fontFamily = 'RobotoRegular') => `
    font-size: ${fontSize};
    color: ${color};
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`;

{
    /*Minxin for show element with a transition from opacity in 0 to 1*/
}
export const transitionOpacity = (time = '1s') => `
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: ${time};
    animation-fill-mode: forwards;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
