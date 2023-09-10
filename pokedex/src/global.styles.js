import styled, { createGlobalStyle } from 'styled-components';
import PokemonSolid from './assets/fonts/pokemon/PokemonSolid.ttf';
import RobotoRegular from './assets/fonts/roboto/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "RobotoRegular";
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: "PokemonSolid";
    src: url(${PokemonSolid});
  }

 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  body, html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0; 
  }

  ul, li, ol {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none !important;
    color: black;
  }

  * {
    font-family:  'Poppins', 'Arial', 'Helvetica', 'sans-serif';
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    box-sizing: border-box;
  }

  .routes-container {
    padding: 20px 70px;
  }

  :root {
    --swiper-theme-color: #222e41;
    //overflow: auto;
    --swiper-navigation-color: #222e41;
  }

  body .baz-wrapper {
    //  overflow-x: hidden;
    //display: block;
  }

  #root {
  /*   height: 100%;
    min-height: 100%; */
    display: flex;
    flex-direction: column;
    min-height: 100vh ;
    // overflow-x: hidden;

    --title-color:#222e41;
    --smalltext-color: #747f92;
  
    /* font-size */
    --title-size: 18px;
    --description-size: 16px;
    --smallText-size: 14px;

  }


  ::-ms-reveal {
    display: none;
  }

  .container{
    //background-color: red;
    margin: auto;
    //padding: 0px 24px 56px 24px;
     &.c1{max-width: 976px;}
     &.c2{

      max-width: 880px;
   // padding: 0px 20px;
    //margin-left: 280px;
    margin-left: 200px;

      @media(max-width: 1220px){
        max-width: 780px;
      }

      @media(max-width: 1120px){
        max-width: 880px;
        margin: 0 auto;
      }

      @media(max-width: 910px){
        max-width: 700px;
      }

      @media(max-width: 740px){
        max-width: 550px;
      }

      @media (max-width: 580px) {
    max-width: 450px;
    padding: 0px 20px;
  }

  @media (max-width: 480px) {
    max-width: 380px;
  }

    }
  }

  .hover{
    cursor:pointer;
    &:hover{
      box-shadow: 0 6px 4px 0 rgba(5, 6, 9, 0.12);
    }
    &:active{
      background-color: #f5f5f5;
    }
  }  
`;
