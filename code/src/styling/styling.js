import styled from 'styled-components';

import backgroundImage from "img/creepy_treehouse.png";

// Global styling goes here

export const BackgroundContainer = styled.main`
 background-image: url(${backgroundImage});
 height: 100vh;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 
`;

export const Button = styled.button`
   background: #0d71b9;
   border-radius: 5px;
   padding-bottom: 5px;
   color: #fff;
   font-size: 20px;
   font-family: 'Texturina', serif
`
export const Text = styled.h2`
  font-size: 25px;
`

export const TextContainer = styled.section`
  background: #000000;
  color: #ffffff;
  border-radius: 10px;
  width: 90%;
  padding: 5px;
  opacity: 0.8;
  text-align: center;
  
  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
  `;