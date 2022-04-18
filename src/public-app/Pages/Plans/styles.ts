import styled from 'styled-components';
import { ThemeProps } from '../../../assets/global-styles/theme';

export const Wrap = styled.div`
    span {
        a {
            color: ${(props: ThemeProps) => props.theme.purple};
            text-decoration: underline;
        }
    }
`;

export const InfoWrap = styled.div`

    p {
        font-size: 1.5rem
    }

    & > div {
        margin: 40px;
    }

    ul {
        li {
            padding: 12px 0;
            h1 {
                color: ${(props: ThemeProps) => props.theme.purple};
            }

            &:nth-child(1) {
                font-size: 1rem;
            }
            &:nth-child(2) {
                font-size: 1.3rem;
            }
            &:nth-child(3) {
                font-size: 1.6rem;
            }
        }
    }

    @media (max-width: 500px) {
        p {
            font-size: 1.2rem
        }

        & > div {
            margin: 40px 10px;
        }

        ul {
            li {
                padding: 8px 0;

                &:nth-child(1) {
                    font-size: 1rem;
                }
                &:nth-child(2) {
                    font-size: 1.3rem;
                }
                &:nth-child(3) {
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (max-width: 400px) {
        p {
            font-size: 1rem
        }

        & > div {
            margin: 30px 5px;
        }

        ul {
            li {
                padding: 5px 0;

                &:nth-child(1) {
                    font-size: .7rem;
                }
                &:nth-child(2) {
                    font-size: 1rem;
                }
                &:nth-child(3) {
                    font-size: 1.2rem;
                }
            }
        }
    }

    @media (max-width: 330px) {

        ul {
            padding-left: 0px;
            li {
                padding: 5px 0;

                &:nth-child(1) {
                    font-size: .7rem;
                }
                &:nth-child(2) {
                    font-size: .8rem;
                }
                &:nth-child(3) {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export const FormSection = styled.div`
    margin: 40px auto;
`;

export const Grid = styled.div`
    margin: 16px 0;
    display: grid;
    grid-template-columns: repeat(4, 150px) 1fr;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media (max-width: 720px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 545px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const SimulationWrap = styled.div`
    min-width: 200px;

    .bx,
    p {
        font-size: 2rem;
        color: ${(props: ThemeProps) => props.theme.purple};
    }

    .bx {
        color: ${(props: ThemeProps) => props.theme.purple};
    }
`;