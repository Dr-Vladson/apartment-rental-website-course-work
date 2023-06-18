import "./style/InputWithDropDownMenuBlock.css"
import DropDownMenuItem from "./DropDownMenuItem";
import {Dispatch, SetStateAction, useState} from "react";
import DropDownMenuItemNotFound from "./DropDownMenuItemNotFound";

interface InputWithDropDownMenuBlockPropsInterface {
    inputPlaceholder: string
    valuesArray: string []
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}

export default function InputWithDropDownMenuBlock({
                                                       inputPlaceholder,
                                                       valuesArray,
                                                       inputValue,
                                                       setInputValue
                                                   }: InputWithDropDownMenuBlockPropsInterface) {
    let [isDropDownMenuActive, setIsDropDownMenuActive] = useState<boolean>(false)
    const filteredValues = inputValue ? valuesArray.filter((value) =>
        value.toLowerCase().includes(inputValue.toLowerCase())) : valuesArray.slice()

    const dropDownMenuItemValueSetter = (value: string) => {
        setInputValue(value)
    }

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const windowOnClickDropDownMenuDeactivator = (e: MouseEvent) => {
        if (isDropDownMenuActive && !(e.target as HTMLElement).closest
        ('.input-with-drop-down-menu__input-container')) setIsDropDownMenuActive(false)
    }

    window.onclick = windowOnClickDropDownMenuDeactivator

    const inputOnClickDropDownMenuToggler = (e: React.MouseEvent) => {
        if (isDropDownMenuActive) setIsDropDownMenuActive(false)
        else setIsDropDownMenuActive(true)
    }
    const inputOnKeyDownDropDownMenuActivator = (e: React.KeyboardEvent) => {
        if (!isDropDownMenuActive) setIsDropDownMenuActive(true)
    }

    return (
        <div className={"input-with-drop-down-menu"}>
            <div className={"input-with-drop-down-menu__input-container"} onClick={inputOnClickDropDownMenuToggler}
                 onKeyDown={inputOnKeyDownDropDownMenuActivator}>
                <input type="text" placeholder={inputPlaceholder} value={inputValue} onChange={inputOnChange}/>
            </div>
            <div
                className={`input-with-drop-down-menu__drop-down-menu-container ${isDropDownMenuActive ?
                    'input-with-drop-down-menu__drop-down-menu-container_active' : ''}`}>
                {
                    filteredValues.length ? filteredValues.map((value, index) =>
                            <DropDownMenuItem dropDownMenuItemValueSetter={dropDownMenuItemValueSetter} value={value}
                                              key={`drop-down-menu-item ${value} ${index}`}/>)
                        : <DropDownMenuItemNotFound/>
                }
            </div>
        </div>
    )
}