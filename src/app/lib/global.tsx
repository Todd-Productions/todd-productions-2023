"use client";

import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import tw from "twin.macro";

const GlobalStyles = createGlobalStyle`
    ${normalize()}

    body, html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        ${tw`bg-grey-200`}
    }
`;

export default GlobalStyles;
