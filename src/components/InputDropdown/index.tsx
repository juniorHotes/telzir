import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import Loading from "../Loading";
import { View } from './styles'

interface Props {
  label?: string,
  placeholder?: string,
  inputValue?: string | number,
  name?: string,
  options: Array<any>,
  propertyToShow: string,
  handleChange: (value?: any) => void,
  maxWidth?: number | string,
  whiteSpaceLabel?: 'pre-wrap',
  disabled?: boolean,
  defaultValue?: any,
  preSelected?: boolean,
  preClick?: (value?: any) => void,
  noOptionsMessage?: string,
  isLoading?: boolean
}

export const InputDropdown: React.FC<Props> = ({
  label,
  placeholder,
  inputValue,
  name,
  options,
  propertyToShow,
  handleChange,
  maxWidth,
  whiteSpaceLabel,
  disabled = false,
  preSelected,
  defaultValue,
  preClick = () => { },
  noOptionsMessage = 'Sem informações',
  isLoading = false
}) => {
  const dropDownList = useRef<null | any>(null);
  const inputRef = useRef<null | any>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number>();
  const [lastSelectedValue, setLastSelectedValue] = useState<string | number>();
  const [isValueChange, setIsValueChange] = useState(false);
  const [_options, set_Options] = useState(options);

  const focusInput = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }

  const handleInputSelection = (value: any) => {
    setSelectedValue(value[propertyToShow]);
    setLastSelectedValue(value[propertyToShow]);
    handleChange(value);
    focusInput();
  };

  useEffect(() => {
    if (inputValue !== undefined) {
      setSelectedValue(inputValue);
    }
  }, [inputValue])

  useEffect(() => {
    set_Options(options)
    if (preSelected) {
      if (options.length > 0) {
        handleInputSelection(options[0])
      }
    }
  }, [options, preSelected])

  useEffect(() => {
    if (defaultValue !== undefined && options.length > 0) {
      handleInputSelection(options[defaultValue])
    }
  }, [defaultValue, options])

  useLayoutEffect(() => {
    if (dropDownList.current) {
      if (dropDownList.current.getBoundingClientRect().bottom > window.innerHeight) {
        dropDownList.current.classList.add('reverte-dropdown')
      } else {
        dropDownList.current.classList.remove('reverte-dropdown')
      }
    }
  }, [showDropdown])

  const handleClick = () => {
    preClick()
    if (disabled) return
    setLastSelectedValue(selectedValue);
    setIsValueChange(false)
    setShowDropdown(!showDropdown);
    set_Options(options)
  }

  const handleBlur = useCallback(() => {
    if (isValueChange)
      setSelectedValue(lastSelectedValue || '')

    setShowDropdown(false);
  }, [isValueChange])

  const searchOption = useCallback((e: string) => {
    function normalizeText(text: string): string {
      return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }

    const value = e.toString()
    const query = normalizeText(value)

    const _ = options.filter((item: any) => {
      const keyLowercase = normalizeText(item[propertyToShow].toString())
      if (keyLowercase.search(query) !== -1)
        return item
    })

    setSelectedValue(value)
    set_Options([..._])

    if (!showDropdown && value !== '') setShowDropdown(true);
  }, [_options])

  return (
    <View maxWidth={maxWidth}>
      <div
        tabIndex={1}
        className={`input arrow${showDropdown ? '-up' : '-down'}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation()
          handleClick()
        }}
        onBlur={(e: React.FocusEvent<HTMLElement>) => {
          e.stopPropagation()
          if (e.relatedTarget?.className !== "input arrow-up") {
            handleBlur()
          }
        }}
      >
        {label && <label style={{ whiteSpace: whiteSpaceLabel }}>{label}</label>}
        <input
          ref={inputRef}
          className="global-input input-placeholder type-dropdown"
          value={selectedValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchOption(e.target.value)}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            e.target.select()
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            let codes = ['Delete', 'Backspace']
            if (codes.includes(e.key)) {
              setIsValueChange(true)
            }
          }}
          placeholder={placeholder}
          type="text"
          disabled={disabled}
        />
        {
          showDropdown &&
          <div className={`input-dropdown__container`} ref={dropDownList}>
            <ul className="input-dropdown__ul">
              {_options &&
                _options.length > 0 ?
                _options.map((option: any, index: number) => (
                  <div key={`input-dropdown-${index}`}>
                    <li
                      className="input-dropdown__li"
                      onClick={() => {
                        handleInputSelection({ ...option, name });
                      }}
                    >
                      {option?.[propertyToShow]}
                    </li>
                    <div className="input-divider" />
                  </div>
                ))
                : <div key={`input-dropdown-0`}>
                  {
                    isLoading
                      ? (
                        <li className="input-dropdown__li">
                          Carregando... <Loading />
                        </li>
                      ) : <li className="input-dropdown__li">{noOptionsMessage}</li>
                  }
                </div>
              }
            </ul>
          </div>
        }
      </div>
    </View>
  );
}
