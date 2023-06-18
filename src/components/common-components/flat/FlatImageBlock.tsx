import "./style/FlatImageBlock.css"

interface FlatImageBlockPropsInterface {
    imageRef : string,
}
export default function FlatImageBlock ({imageRef}:FlatImageBlockPropsInterface){
    return(
        <div className={"flat-image-block"}>
            <img src={imageRef} alt=""/>
        </div>
    )
}