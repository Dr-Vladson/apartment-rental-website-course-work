import "./style/TextArea.css"
import {Dispatch, SetStateAction} from "react";

interface FlatDescriptionTextAreaPropsInterface {
    text : string
    setText : Dispatch<SetStateAction<string>>
}
export default function TextArea ({text,setText}:FlatDescriptionTextAreaPropsInterface){
    const textAreaOnChangeFunc = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setText(e.target.value)
    }
    return(
        <div className={"textarea-container"}>
            <textarea value={text} onChange={textAreaOnChangeFunc}></textarea>
        </div>
    )
}