import FilterBarBlock from "./FilterBarBlock";
import FlatsWrap from "./FlatsWrap";
import FlatsStructurer from "../common-components/structural-components/FlatsStructurer";
import FlatFullBlock from "../common-components/flat/FlatFullBlock";
import {useRef} from "react";
import "./style/ApartmentSearchBlock.css"

interface ApartmentSearchPageBlockPropsInterface {

}
export default function ApartmentSearchPageBlock ({}:ApartmentSearchPageBlockPropsInterface){
    const currentFlatBlock = useRef<null | HTMLDivElement>(null)
    return(
        <div className={"apartment-search-block"}>
            <FlatsStructurer>
                <FilterBarBlock/>
                <FlatFullBlock currentFlatBlockRef={currentFlatBlock}/>
                <FlatsWrap currentFlatBlock={currentFlatBlock}/>
            </FlatsStructurer>
        </div>
    )
}