import {ReactNode} from "react";
import "./style/FlatsStructurer.css"

interface FlatsStructurerPropsInterface {
    children : ReactNode
}
export default function FlatsStructurer ({children}:FlatsStructurerPropsInterface){
    return(
        <div className={"flats-structurer dflex"}>
            {children}
        </div>   
    )
}