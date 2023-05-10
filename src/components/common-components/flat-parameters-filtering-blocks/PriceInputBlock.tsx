import {Dispatch, SetStateAction, useState} from "react";
import  "./style/PriceInputBlock.css"
interface PriceInputBlockPropsInterface {
    inputPricePlaceholder: string
    inputPriceValue : string
    setInputPriceValue : Dispatch<SetStateAction<string>>
}
export default function PriceInputBlock ({inputPricePlaceholder, inputPriceValue , setInputPriceValue}:PriceInputBlockPropsInterface){
    const inputPriceValidator = (value: string) => {
        for (let i = 0; i < value.length; i++){
            const char = value[i]
            if(i === 0 && char === '0') return false
            if (char !== '0' && char !== '1'  && char !== '2' && char !== '3' && char !== '4' && char !== '5' && char !== '6' && char !== '7' && char !== '8' && char !== '9'){
                return false
            }
        }
        return true
    }
    const inputPriceOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputPriceValidator(e.target.value)) setInputPriceValue(e.target.value)
    }
    return(
        <div className={"price-input-block"}>
            <input placeholder={inputPricePlaceholder} type="text" value={inputPriceValue} onChange={inputPriceOnChange}/>
        </div>
    )
}