import {Flat} from "../../models";
import FlatBlock from "../common-components/flat/FlatBlock";
import DelAndEditBtnsBlock from "./DelAndEditBtnsBlock";
import "./style/UserFlats.css"

interface UserFlatsPropsInterface {
    flatsArray : Flat []
}
export default function UserFlats ({flatsArray}:UserFlatsPropsInterface){
    return(
        <>
            {
                flatsArray.map((flat) => <div key={flat.id} className={"flat-block-wrap-370-x-500"}><FlatBlock flat={flat}><DelAndEditBtnsBlock
                    flat={flat}/></FlatBlock> </div>)
            }
        </>
    )
}