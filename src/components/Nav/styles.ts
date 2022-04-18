import Styled, { keyframes } from "styled-components";
import { ThemeProps } from '../../assets/global-styles/theme'

export const View = Styled.nav`
    width: 100%;
    height: 65px;
    background-color: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, .2);
    position: sticky;
    z-index: 20;
    top: 0;
`;

export const Wrap = Styled.div`
    width: 100%;
    max-width: ${(props: ThemeProps) => props.theme.maxWidth};
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    a {
        font-weight: 500;
        font-size: 18px;
        color: ${(props: ThemeProps) => props.theme.secondaryTextColor};
    }

    & > div:nth-child(3) {
        a {
            font-weight: 800;
        }
    }

    @media (max-width: 790px) {
        & > div:nth-child(1) {
            z-index: 1
        }
    }
`;

export const FlexRight = Styled.div`
    width: 85%;
    min-width: 220px;
    display: flex;
    justify-content: flex-end;
    opacity: 1;
    position: relative;

    @media (max-width: 790px) {
        display: none;
    }
`;

// Link wrap
interface LinkWpProps {
    flexbases?: string;
    mrg?: string;
    txtalg?: string;
}
export const LinkWp = Styled.div<LinkWpProps>`
    flex-basis: ${({ flexbases }) => flexbases ? flexbases : '14%'};
    margin: ${({ mrg }) => mrg ? mrg : '0 8px'};
    text-align: ${({ txtalg }) => txtalg ? txtalg : 'center'};

    @media (max-width: 790px) {
        flex-basis: 0;
        margin: 0;
        text-align: center;
        border-bottom: 1px solid ${(props: ThemeProps) => props.theme.dullGray};

        a {
            display: block;
            padding: 18px;
            font-size: 18px;
        }
    }
`;

interface MobileWrapProps { isNavMobile: boolean }
export const MobileBtn = Styled.div<MobileWrapProps>`
    position: relative;
    top: -25px;
    right: 43px;
    z-index: 1;
    display: none;

    i.bx {
        font-size: 48px;
        position: absolute;
        visibility: ${({ isNavMobile }) => isNavMobile ? 'hidden' : 'visible'};
    }

    i.bx.bx-plus {
        transform: rotate(45deg);
        visibility: ${({ isNavMobile }) => isNavMobile ? 'visible' : 'hidden'};
    }

    @media (max-width: 790px) {
        display: block;
    }
`;

const mobileVisible = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const mobileHidden = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`;

interface MobileMenuProps { isNavMobile: boolean }
export const MobileMenu = Styled.div<MobileMenuProps>`
    width: 100%;
    height: 100vh;
    padding: 56px;
    background-color: white;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    display: ${({ isNavMobile }) => isNavMobile ? 'flex' : 'none'};
    transition: .5s;
    flex-direction: column!important;
    justify-content: flex-start!important;
    animation-name: ${({ isNavMobile }) => isNavMobile ? mobileVisible : mobileHidden};
    animation-duration: .5s;
    animation-fill-mode: ${({ isNavMobile }) => isNavMobile ? 'forwards' : 'backwards'};
`;