import { createGlobalStyle } from "styled-components";
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        color: ${(props: ThemeProps) => props.theme.primaryTextColor};
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props: ThemeProps) => props.theme.primaryColor};
    }

    .site-title {
        font-size: 2.5rem;
        color: ${(props: ThemeProps) => props.theme.purple};
    }

    @media (max-width: 600px) {
        .site-title {
            font-size: 2rem;
        }
    }

    ::-webkit-scrollbar {
            width: 12px;
        }
        
    ::-webkit-scrollbar-track {
        background-color: #DCDCDC;
        border-bottom-right-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${(props: ThemeProps) => props.theme.purple};
        border-radius: 4px;
    }

`;