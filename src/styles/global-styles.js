import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
    }
`;
