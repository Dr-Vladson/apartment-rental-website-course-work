import "./style/Icon20pxBlock.css"
interface Icon20pxBlockPropsInterface {
    iconPng : string
    altDescription : string
}
export default function Icon20pxBlock ({iconPng, altDescription}:Icon20pxBlockPropsInterface){
    return(
        <div className={"icon-20px-block"}>
            <img src={iconPng} alt={altDescription}/>
        </div>
    )
}