import Styled from "styled-components";
import { ThemeProps } from '../../assets/global-styles/theme';

interface WrapProps {
    nogap?: boolean;
    padding?: string | number;
    maxwidth?: string | number;
}
export const Wrap = Styled.div<WrapProps>`
    width: 100%;
    max-width: ${({ maxwidth }) => maxwidth ? maxwidth : (props: ThemeProps) => props.theme.maxWidth};
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: ${({ nogap }) => nogap ? '0' : '55px'};
    padding: ${({ padding }) => padding ? padding : '45px 16px'};

    .wp-title {
        h1 {
            font-size: 2.6rem;
            color: ${(props: ThemeProps) => props.theme.purple};
        }
    }

    @media (max-width: 600px) {
        .wp-title {
            h1 {
                font-size: 2rem;
            }
        }
    }

    @media (max-width: 400px) {
        .wp-title {
            h1 {
                font-size: 1.5rem;
            }
        }
    }
`;