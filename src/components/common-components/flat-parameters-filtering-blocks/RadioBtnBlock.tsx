import "./style/RadioBtnBlock.css"
import {Dispatch, SetStateAction} from "react"

interface RadioBtnBlockPropsInterface {
    radioBtnName: string,
    radioBtnValue : string
    radioBtnChosenValue : string
    setRadioBtnChosenValue : Dispatch<SetStateAction<string>>
}
export default function RadioBtnBlock ({radioBtnName, radioBtnValue, setRadioBtnChosenValue, radioBtnChosenValue}:RadioBtnBlockPropsInterface){
    const radioBtnOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setRadioBtnChosenValue(radioBtnValue)
    }
    return(
        <div className={"radio-btn-block"}>
            <input type="radio" name={radioBtnName} value={radioBtnValue} checked={radioBtnChosenValue === radioBtnValue} onChange={radioBtnOnChange}/>
        </div>
    )
}