import Styled from "styled-components";
import { ThemeProps } from '../../assets/global-styles/theme'

export const View = Styled.div`
    width: 100%;
    height: 300px;
    background-color: ${(props: ThemeProps) => props.theme.thirdColor};
`;

export const Wrap = Styled.div`
    width: 100%;
    max-width: ${(props: ThemeProps) => props.theme.maxWidth};
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & > div:nth-child(2) {
        max-width: 670px;
        text-align: center;
        
        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 16px;
        }

        @media (max-width: 500px) {
            p {
                font-size: 14px;
            }
        }
    }

    & > div:last-child {
        span {
            opacity: .4;
        }

        @media (max-width: 500px) {
            span {
                text-align: center;
                font-size: 14px;
            }
        }
    }
`;