import "./style/ImageInputBlock.css"
import {Dispatch, SetStateAction} from "react";
import invalidImage from "./images/invalidImage.jpg"

interface ImageInputBlockPropsInterface {
    imageLink : string
    setMainImageLink : Dispatch<SetStateAction<string>>
    isImageValid : boolean
}
export default function ImageInputBlock ({imageLink, setMainImageLink, isImageValid}:ImageInputBlockPropsInterface){
    const inputOnChangeFunc = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setMainImageLink(e.target.value)
    }
    const btnOnClickFunc = (e : React.MouseEvent) => {
        e.preventDefault()
        setMainImageLink('')
    }
    return(
        <div className={"image-input-block"}>
            <div className={"image-input-block__input-container dflex"}>
                <input type="text" value={imageLink} onChange={inputOnChangeFunc} placeholder={"Вставне валідне посилання"}/>
                <button onClick={btnOnClickFunc}>Очистити</button>
            </div>
            <div className={"image-input-block__image-container"}>
                {
                    <img src={isImageValid? imageLink : invalidImage} alt="фото вашої квартири"/>
                }
            </div>
        </div>
    )
}