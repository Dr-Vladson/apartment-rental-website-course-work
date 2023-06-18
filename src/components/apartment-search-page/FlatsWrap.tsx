import {MutableRefObject, useEffect,} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Flat, rentalType} from "../../models";
import {setCurrentFlat} from "../../features/slices/flatsSlice";
import Flats from "../common-components/flat/Flats";
import {setGetFlatsAsync} from "../../features/async-action-creators/AsyncActionCreators";
import FlatsNotFoundBlock from "../common-components/flat/FlatsNotFoundBlock";
import "./style/FlatsWrap.css"

interface FlatsWrapPropsInterface {
    currentFlatBlock : MutableRefObject<HTMLDivElement | null>
}
export default function FlatsWrap ({currentFlatBlock}:FlatsWrapPropsInterface){
    useEffect(() => {
        dispatch(setGetFlatsAsync())
    }, [])
    const dispatch = useAppDispatch()
    let flatsArray = useAppSelector(({flats}) => flats.flatsArray)
    let {districtInputValue, includedRoomsAmount: {isRoomsAmountFilterActive,isFourPlusRoomsAmountIncluded,isOneRoomAmountIncluded,isThreeRoomsAmountIncluded,isTwoRoomsAmountIncluded},
        inputPrice :{inputHighestPriceValue,inputLowestPriceValue},rentalTypeValue} = useAppSelector(({flatParameters}) => flatParameters.filteringParameters )

    const flatFilteringSuitabilityDefiner = ({district,rentalTermType,price,roomAmount} : Flat)=>{
        return (districtInputValue? district.toLowerCase().includes(districtInputValue.toLowerCase()) : true) &&
            (inputHighestPriceValue? price <= parseInt(inputHighestPriceValue) : true) &&
            (inputLowestPriceValue? price >= parseInt(inputLowestPriceValue) : true) &&
            (rentalTypeValue !== rentalType.any? (rentalTermType === rentalTypeValue  || rentalTermType === rentalType.any) : true) &&
            (!isRoomsAmountFilterActive? true : (
                (roomAmount === 1 && isOneRoomAmountIncluded) ||
                (roomAmount === 2 && isTwoRoomsAmountIncluded) ||
                (roomAmount === 3 && isThreeRoomsAmountIncluded) ||
                (roomAmount >= 4 && isFourPlusRoomsAmountIncluded)
            ))
    }
    let filteredFlats = flatsArray.filter((flat) => flatFilteringSuitabilityDefiner(flat))

    const currentFlatSetter = (flat : Flat) => {
        dispatch(setCurrentFlat(flat))
        currentFlatBlock?.current ? currentFlatBlock?.current?.scrollIntoView() : window.scroll(0,0)
    }
    return(
            filteredFlats.length?
                <Flats flatsArray={filteredFlats} currentFlatSetter={currentFlatSetter}/>
            :<div className={"search-page-flats-not-found-wrap"}><FlatsNotFoundBlock/></div>
    )
}