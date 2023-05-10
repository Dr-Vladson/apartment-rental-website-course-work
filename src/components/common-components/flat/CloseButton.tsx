import "./style/CloseButton.css"
import crossIcon from "./images/cross-icon.png"
interface CloseButtonPropsInterface {
    closeButtonOnClick: (e: React.MouseEvent) => void
}
export default function CloseButton ({closeButtonOnClick}:CloseButtonPropsInterface){
    return(
        <div className={"close-button-block"} onClick={closeButtonOnClick}>
            <img src={crossIcon} alt="close"/>
        </div>   
    )
}