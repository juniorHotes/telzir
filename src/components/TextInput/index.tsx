import React from 'react'
import { View, Content } from './styles'

interface TextInputProps {
    label?: string,
    whiteSpaceLabel?: 'pre-wrap',
    flexDirection?: 'row' | 'column'
    name?: string,
    type?: string,
    placeholder?: string,
    width?: number | string,
    onChange: (value: any) => void,
    inputValue?: string
}

export const TextInput: React.FC<TextInputProps> = ({
    label,
    whiteSpaceLabel,
    flexDirection = "row",
    placeholder,
    width,
    onChange,
    type = 'text',
    name,
    inputValue
}) => {

    return (
        <View flexDirection={flexDirection} width={width} >

            {label && <label style={{ whiteSpace: whiteSpaceLabel }}>{label}</label>}

            <Content>
                {(inputValue === undefined)
                    ? <input
                        placeholder={placeholder}
                        onChange={value => onChange(value)}
                        type={type}
                        name={name}
                    />
                    : <input
                        placeholder={placeholder}
                        onChange={value => onChange(value)}
                        type={type}
                        name={name}
                        value={inputValue || ""}
                    />
                }
                <span/>
            </Content>
        </View>
    )
}