import styled, { css } from 'styled-components';
import { ThemeProps } from '../../assets/global-styles/theme';

const positionFixedCss = css`
    height: 100vh;
    position: fixed;
    z-index: 100;
`;

interface OverlayProps {
    nooverlay?: boolean;
    positionFixed?: boolean
}
export const Overlay = styled.div<OverlayProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: ${({ nooverlay }) => nooverlay ? 'transparent' : 'rgba(0,0,0, .5)'};
    ${({ positionFixed }) => positionFixed ? positionFixedCss : ''};

    i.bx-spin {
        font-size: 3rem;
        color: ${(props: ThemeProps) => props.theme.secondaryColor}
    }
`;