import "./style/RoomAmountCheckboxBlock.css"
import {roomAmount} from "../../../models";
import React, {Dispatch, SetStateAction} from "react";
interface RoomAmountCheckboxBlockPropsInterface {
    roomAmount : roomAmount
    isIncluded : boolean
    setIsIncluded : Dispatch<SetStateAction<boolean>>
}
export default function RoomAmountCheckboxBlock ({roomAmount, isIncluded, setIsIncluded}:RoomAmountCheckboxBlockPropsInterface){
    const checkboxOnClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsIncluded(!isIncluded)
    }
    return(
        <div className={`${isIncluded && "room-amount-block-active"} room-amount-block`} onClick={checkboxOnClick}>
            <span>{roomAmount}</span>
        </div>
    )
}