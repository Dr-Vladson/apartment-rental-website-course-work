import "./style/FlatAddressTextBlock.css"

interface FlatAddressTextBlockPropsInterface {
    addressString : string
}
export default function FlatAddressTextBlock ({addressString}:FlatAddressTextBlockPropsInterface){
    return(
        <div className={"flat-address-text-block"}>
            <p>{addressString}</p>
        </div>
    )
}