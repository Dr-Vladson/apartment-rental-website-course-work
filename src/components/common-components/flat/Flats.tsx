import FlatBlock from "./FlatBlock";
import {Flat} from "../../../models";
import "./style/Flats.css"

interface FlatsPropsInterface {
    flatsArray : Flat []
    currentFlatSetter : (flat: Flat) => void
}
export default function Flats ({flatsArray, currentFlatSetter}:FlatsPropsInterface){

    return(
        <>
            {
                flatsArray.map((flat) => <div key={flat.id} className={"flat-block-wrap-370-x-400"}><FlatBlock flat={flat} currentFlatSetter={currentFlatSetter}/></div>)
            }
        </>
    )
}