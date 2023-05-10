import "./style/FlatDescriptionBlock.css"
interface FlatDescriptionBlockPropsInterface {
    description: string
}
export default function FlatDescriptionBlock ({description}:FlatDescriptionBlockPropsInterface){
    return(
        <div className={"flat-description-block"}>
            <p>{description}</p>
        </div>
    )
}