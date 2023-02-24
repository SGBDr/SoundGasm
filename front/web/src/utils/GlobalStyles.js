//c'est un composant qui ne peut pas avoir d'enfant et qui permet de donner du style a d'autres composants
import { COLOR } from './index';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${COLOR.background};

        @media (prefers-color-scheme: dark) {
            background: ${COLOR.background};
        }
    }
`;