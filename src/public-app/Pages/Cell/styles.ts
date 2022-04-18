import styled from 'styled-components';
import { ThemeProps } from '../../../assets/global-styles/theme';

export const CardWrap = styled.div`
     display: flex;
     justify-content: flex-start;
     flex-wrap: wrap;
     gap: 20px;

     @media (max-width: 600px) {
        justify-content: center;
     }
`;

export const SeeAll = styled.div`
    padding: 12px;
    margin: 60px auto 12px auto;
    background-color: ${(props: ThemeProps) => props.theme.dullGray};
    text-align: center;
    cursor: pointer;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;