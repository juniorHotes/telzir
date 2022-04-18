import styled from 'styled-components';
import { ThemeProps } from '../../assets/global-styles/theme';

interface ViewProps {
    maxWidth?: number | string,
}
export const View = styled.div<ViewProps>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : 'unset'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out;

    .input {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-end;
        position: relative;
        flex: 1 0 20%;
        margin-top: 5px;
        margin-bottom: 15px;

        &.arrow-up,
        &.arrow-down {
            &::after {
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #000;
                right: 5px;
                top: 26px;
                cursor: pointer;
                -webkit-transition: all 0.2s linear;
                -moz-transition: all 0.2s linear;
                -o-transition: all 0.2s linear;
                transition: all 0.2s linear;
            }
        }

        &.arrow-up {
            &::after {
                transform: rotate(180deg);
            }
        }
    
        &.arrow-down {
            &::after {
                transform: rotate(360deg);
            }
        }    

        label {
            margin-right: 16px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 900;
            font-size: 14px;
            color: ${(props: ThemeProps) => props.theme.primaryTextColor};
        }

        &:last-of-type {
            margin-right: 0;
        }

        &:nth-child(4n) {
            margin-right: 0;
        }

        &.special {
            flex: 0 0 30%;

            label {
                min-width: 120px;
            }
        }
    }

    .global-input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${(props: ThemeProps) => props.theme.secondaryTextColor};
        color: #555;
        box-sizing: border-box;
        font-size: 16px;
        padding: 5px 0px;
        position: relative;
        width: 100%;

        &:focus {
            outline: none;
            border-bottom: 2px solid ${(props: ThemeProps) => props.theme.secondaryTextColor};
        }

        &::placeholder {
            font-size: 16px;
            padding: 0 5px;
        }
    }

    .input-placeholder::-webkit-input-placeholder,
    .input-placeholder::-moz-placeholder,
    .input-placeholder:-ms-input-placeholder, 
    .input-placeholder:-moz-placeholder {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.4);
    }

    .input-placeholder:hover {
        cursor: pointer;
    }

    .input-dropdown__container {
        position: absolute;
        width: 100%;
        margin-top: 25px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 2px solid ${(props: ThemeProps) => props.theme.secondaryTextColor};
        top: 25px;
        z-index: 9;
        transform: none;
        bottom: unset;
        transition: visibility .5s;
        
        ul {
            transform: inherit;
            display: list-item;
            flex-direction: column;
        }

        &.reverte-dropdown {
            transform: rotateX(180deg);
            top: unset;
            bottom: 40px;

            ul {
                transform: inherit;
                display: flex;
                flex-direction: column-reverse;
            }
        }

        &:focus {
            display: block;
        }
            
        .input-dropdown__ul {
            list-style: none;
            margin: 0;
            padding: 5px 10px 0 10px;
            width: 100%;
            position: relative;
            min-height: 62px;
            max-height: 174px;
            overflow: auto;
            
            .input-dropdown__li {
                display: flex;
                align-items: center;
            
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 16px;
                padding: 20px 0;
                color: #26282c;
            }
        
            .input-dropdown__li:hover {
                cursor: pointer;
                background-color: #f9f9f9;
            }
        }
        
        .input-divider {
            position: absolute;
            height: 1px;
            left: 0px;
            right: 0px;
            background: #dee0e3;
        }
    }     
        
    .input-dropdown__container:after,
    .input-dropdown__container:before {
        bottom: 100%;
        right: 12px;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .input-dropdown__container:after {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #fff;
        border-width: 12px;
        right: 15px;
    }

    .input-dropdown__container:before {
        border-color: rgba(0, 0, 255, 0);
        border-bottom-color: ${(props: ThemeProps) => props.theme.secondaryTextColor};
        border-width: 15px;
    }
`;