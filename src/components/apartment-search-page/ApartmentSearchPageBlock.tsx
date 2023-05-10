import FilterBarBlock from "./FilterBarBlock";
import WholePageStructurer from "../common-components/structural-components/WholePageStructurer";
import FlatsStructurer from "../common-components/structural-components/FlatsStructurer";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import FlatBlock from "../common-components/flat/FlatBlock";
import FlatFullBlock from "../common-components/flat/FlatFullBlock";
import {Flat} from "../../models";
import {setCurrentFlat} from "../../features/flatsSlice";
import {useRef} from "react";
import "./style/ApartmentSearchBlock.css"
interface ApartmentSearchPageBlockPropsInterface {

}
export default function ApartmentSearchPageBlock ({}:ApartmentSearchPageBlockPropsInterface){
    const currentFlatBlock = useRef<null | HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const currentFlatSetter = (flat : Flat) => {
        dispatch(setCurrentFlat(flat))
        currentFlatBlock?.current?.scrollIntoView()
    }
    const flatsArray = useAppSelector(({flats}) => flats.flatsArray )
    return(
        <div className={"apartment-search-block"}>
            <FlatsStructurer>
                <FilterBarBlock/>
                <FlatFullBlock currentFlatBlockRef={currentFlatBlock}/>
                {
                    flatsArray.map((flat) => <FlatBlock flat={flat} currentFlatSetter={currentFlatSetter} key={`flat ${flat.id}`}/>)
                }
            </FlatsStructurer>
        </div>
    )
}