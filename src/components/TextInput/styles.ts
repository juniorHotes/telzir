import styled, { css } from 'styled-components';
import { ThemeProps } from '../../assets/global-styles/theme';

const viewRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
`;
const viewColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

interface ViewProps {
    flexDirection: number | string,
    width?: number | string,
}
export const View = styled.div<ViewProps>`
    ${({ flexDirection }) => (flexDirection === 'row') ? viewRow : viewColumn };
    width: ${({ width }) => width ? width : "100%" };

    label {
        font-weight: 900;
        font-size: 14px;
        color: var(--dark-light) !important;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    flex: 1 1 20%;
    margin-bottom: 15px;
    margin-top: 5px;

    input {
        width: 100%;
        font-family: Roboto;
        font-style: normal;
        font-size: 16px!important;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.8)!important;
        border: none;
        background-color: transparent;
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.5)!important;
    }

    input:focus {
        outline: none;
    }
    
    span {
        margin-top: 5px;
        border: 1px solid ${(props: ThemeProps) => props.theme.secondaryTextColor};
    }
`;