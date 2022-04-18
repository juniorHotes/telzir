import Styled, { css } from "styled-components";
import { ThemeProps } from '../../../assets/global-styles/theme';

const displayFlex = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

interface FlexProps {
    flexdirection?: string,
    alignitems?: string,
}
export const Flex = Styled.div<FlexProps>`
    ${displayFlex};
    flex-direction: ${({ flexdirection }) => flexdirection ? flexdirection : 'row'};
    align-items: ${({ alignitems }) => alignitems ? alignitems : 'center'};

    a {
        &:hover {
            h2,
            span,
            .bx {
                color: ${(props: ThemeProps) => props.theme.primaryColor}!important;
            }
            
            background: linear-gradient(17.78deg,#4000ff -29.36%,#102be4 -20.78%,#4124d4 -7.3%,#3434c7 3.73%,#3f47be 14.77%,#4f46b9 24.57%,#5648b7 31.93%,#8b48b7 93.22%);
        }
    }

    span {
        opacity: .8;
    }

`;

export const LinkWrap = Styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid  ${(props: ThemeProps) => props.theme.dullGray}!important;
    transition: .5s;

    @media (max-width: 750px) {
        padding: 35px 5px;
        flex-direction: column;
        align-items: stretch;
        gap: 20px; 
    }   
`;

export const MainInfo = Styled.div`
    max-width: 34%;
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media (max-width: 750px) {
        max-width: 100%;
    }   
`;

export const ItemsWrap = Styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-end;

    .bx {
        font-size: 2.6rem;
        opacity: .5;
    }

    div {
        width: 150px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    @media (max-width: 750px) {
        justify-content: flex-start;

        .bx {
            font-size: 2rem;
        }

        span {
            font-size: .9rem
        }
    }  

    @media (max-width: 400px) {
        .bx {
            font-size: 1.5rem;
        }

        span {
            font-size: .7rem
        }
    }  
`;

export const BannerWrap = Styled.div`
    width: 100%;
    height: 650px;
    max-height: 650px;
    margin: -44px auto 45px auto;
    background: linear-gradient(17.78deg,#4000ff -29.36%,#102be4 -20.78%,#4124d4 -7.3%,#3434c7 3.73%,#3f47be 14.77%,#4f46b9 24.57%,#5648b7 31.93%,#8b48b7 93.22%);

    h1,
    h2 {
        color: ${(props: ThemeProps) => props.theme.primaryColor}!important;
    }
    
    div {
        max-width: ${(props: ThemeProps) => props.theme.maxWidth};
        color: #FFF;
        margin: 0 auto;
        padding: 150px 0 0 16px;

        ul {
            margin-top: 26px;
        }

        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 2rem;
        }

        li {
            list-style: disc;
            padding: 6px;

            &::marker, 
            h2 {
                opacity: .8;
            }

            &::marker {
                font-size: 2.5rem;
                color: ${(props: ThemeProps) => props.theme.primaryColor}!important;
            }
        }
    }

    @media (max-width: 790px) {
        height: 450px;

        div {
            padding: 50px 0 0 16px;

            ul {
                margin-top: 18px;
            }

            h1 {
                font-size: 3rem;
            }

            h2 {
                font-size: 1.3rem;
            }

            li::marker {
                font-size: 2rem;
                color: ${(props: ThemeProps) => props.theme.primaryColor}!important;
            }
        }
    }

    @media (max-width: 450px) {
        height: 350px;

        div {
            padding: 30px 0 0 16px;

            ul {
                margin-top: 12px;
                padding-left: 22px;
            }

            h1 {
                font-size: 1.7rem;
            }

            h2 {
                font-size: 1rem;
            }

            li::marker {
                font-size: 1.5rem;
                color: ${(props: ThemeProps) => props.theme.primaryColor}!important;
            }
        }
    }
`;