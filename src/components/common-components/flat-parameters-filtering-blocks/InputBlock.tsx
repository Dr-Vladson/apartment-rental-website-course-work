import {Dispatch, SetStateAction} from "react";
import "./style/InputBlock.css"

interface InputBlockPropsInterface {
    inputPlaceholder: string
    inputValue : string
    setInputValue : Dispatch<SetStateAction<string>>
    inputValidator ?: (value: string) => boolean
    uniqueStylesClassNames ?: string
}
export default function InputBlock ({inputPlaceholder, inputValue , setInputValue, inputValidator, uniqueStylesClassNames}:InputBlockPropsInterface){
    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputValidator?
            ((inputValidator(e.target.value)) && setInputValue(e.target.value) )
        : setInputValue(e.target.value)
    }
    return(
        <div className={uniqueStylesClassNames || ''}>
            <input placeholder={inputPlaceholder} type="text" value={inputValue} onChange={inputOnChange}/>
        </div>
    )
}