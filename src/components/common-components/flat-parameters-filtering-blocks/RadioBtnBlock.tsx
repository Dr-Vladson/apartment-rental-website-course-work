import "./style/RadioBtnBlock.css"
import {Dispatch, SetStateAction} from "react";
interface RadioBtnBlockPropsInterface {
    radioBtnName: string,
    radioBtnValue : string
    radioBtnDefaultValue : string
    radioBtnChosenValue : string
    setRadioBtnChosenValue : Dispatch<SetStateAction<string>>
}
export default function RadioBtnBlock ({radioBtnName, radioBtnValue, setRadioBtnChosenValue, radioBtnChosenValue, radioBtnDefaultValue}:RadioBtnBlockPropsInterface){
    const radioBtnOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setRadioBtnChosenValue(e.target.value)
    }
    return(
        <div className={"radio-btn-block"}>
            <input type="radio" name={radioBtnName} value={radioBtnValue} checked={radioBtnChosenValue === radioBtnDefaultValue} onChange={radioBtnOnChange}/>
        </div>
    )
}