import "./style/FlatPropertyBlock.css"
interface FlatPropertyBlockPropsInterface {
    children: React.ReactNode
    text : string
}
export default function FlatPropertyBlock ({children, text}:FlatPropertyBlockPropsInterface){
    return(
        <div className={"flat-property-block flat-property-block_padding dflex"}>
            {children}
            <p>{text}</p>
        </div>
    )
}