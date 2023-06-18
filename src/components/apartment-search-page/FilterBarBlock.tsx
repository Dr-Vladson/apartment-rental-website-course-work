import "./style/FilterBarBlock.css"
import RoomAmountCheckboxBlock from "../common-components/flat-parameters-filtering-blocks/RoomAmountCheckboxBlock";
import InputWithDropDownMenuBlock
    from "../common-components/flat-parameters-filtering-blocks/InputWithDropDownMenuBlock";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import InputBlock from "../common-components/flat-parameters-filtering-blocks/InputBlock";
import RadioBtnBlock from "../common-components/flat-parameters-filtering-blocks/RadioBtnBlock";
import BigBtnBlock from "../common-components/buttons/BigBtnBlock";
import {useState} from "react";
import {rentalType, roomAmount} from "../../models";
import {setFilteringParametersObj} from "../../features/slices/flatParametersSlice";
import {setCurrentFlat} from "../../features/slices/flatsSlice";
import {valueOnlyIntegersValidator} from "../../features/validators";

interface FilterBarBlockPropsInterface {

}

export default function FilterBarBlock({}: FilterBarBlockPropsInterface) {
    const dispatch = useAppDispatch()
    const districts = useAppSelector(({flatParameters: {initialParameters: {districtsArray}}}) => districtsArray)
    let [districtInputValue, setDistrictInputValue] = useState<string>('')
    let [inputLowestPriceValue, setInputLowestPriceValue] = useState<string>('')
    let [inputHighestPriceValue, setInputHighestLowestPriceValue] = useState<string>('')
    let [rentalTypeValue, setRentalTypeValue] = useState<string>(rentalType.any)

    let [isOneRoomAmountIncluded, setIsOneRoomAmountIncluded] = useState<boolean>(false)
    let [isTwoRoomsAmountIncluded, setIsTwoRoomsAmountIncluded] = useState<boolean>(false)
    let [isThreeRoomsAmountIncluded, setIsThreeRoomsAmountIncluded] = useState<boolean>(false)
    let [isFourPlusRoomsAmountIncluded, setIsFourPlusRoomsAmountIncluded] = useState<boolean>(false)

    const radioBtnName = "rental-type"
    const btnOnClickFilteringObjDispatcher = (e: React.MouseEvent) => {
        e.preventDefault()
        // here it would be better to check wheather there are changes of default values
        dispatch(setCurrentFlat(null))
        dispatch(setFilteringParametersObj({
            districtInputValue,
            inputPrice: {inputLowestPriceValue, inputHighestPriceValue},
            rentalTypeValue,
            includedRoomsAmount: {
                isRoomsAmountFilterActive: !((isOneRoomAmountIncluded && isTwoRoomsAmountIncluded && isThreeRoomsAmountIncluded && isFourPlusRoomsAmountIncluded) ||
                    (!isOneRoomAmountIncluded && !isTwoRoomsAmountIncluded && !isThreeRoomsAmountIncluded && !isFourPlusRoomsAmountIncluded)),
                isOneRoomAmountIncluded,
                isTwoRoomsAmountIncluded,
                isThreeRoomsAmountIncluded,
                isFourPlusRoomsAmountIncluded,
            }
        }))
    }
    return (
        <div className={"filter-bar-wrap"}>
            <div className={"filter-bar-block dflex"}>
                <div className={"filter-bar-block__title"}><p>Оберіть параметри квартири</p></div>
                <div>
                    <p>Виберіть район</p>
                    <div className={"filter-bar-block__district-chooser"}>
                        <InputWithDropDownMenuBlock inputPlaceholder={"Оберіть район"} valuesArray={districts}
                                                    inputValue={districtInputValue}
                                                    setInputValue={setDistrictInputValue}/>
                    </div>
                </div>
                <div>
                    <p>Ціна</p>
                    <InputBlock inputPlaceholder={"Від"} inputValue={inputLowestPriceValue}
                                setInputValue={setInputLowestPriceValue} inputValidator={valueOnlyIntegersValidator}
                                uniqueStylesClassNames={"price-input-block"}/>
                    <InputBlock inputPlaceholder={"До"} inputValue={inputHighestPriceValue}
                                setInputValue={setInputHighestLowestPriceValue}
                                inputValidator={valueOnlyIntegersValidator}
                                uniqueStylesClassNames={"price-input-block"}/>
                </div>
                <div>
                    <p>Оберіть тип оренди</p>
                    <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.longTerm}
                                        radioBtnChosenValue={rentalTypeValue}
                                        setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.longTerm}</div>
                    <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.daily}
                                        radioBtnChosenValue={rentalTypeValue}
                                        setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.daily}</div>
                    <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.any}
                                        radioBtnChosenValue={rentalTypeValue}
                                        setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.any}</div>
                </div>
                <div>
                    <p>Оберіть кількість кімнат</p>
                    <div className={"filter-bar-block__room-amount-checkboxes dflex"}>
                        <RoomAmountCheckboxBlock roomAmount={roomAmount.oneRoom} isIncluded={isOneRoomAmountIncluded}
                                                 setIsIncluded={setIsOneRoomAmountIncluded}/>
                        <RoomAmountCheckboxBlock roomAmount={roomAmount.twoRooms} isIncluded={isTwoRoomsAmountIncluded}
                                                 setIsIncluded={setIsTwoRoomsAmountIncluded}/>
                        <RoomAmountCheckboxBlock roomAmount={roomAmount.threeRooms}
                                                 isIncluded={isThreeRoomsAmountIncluded}
                                                 setIsIncluded={setIsThreeRoomsAmountIncluded}/>
                        <RoomAmountCheckboxBlock roomAmount={roomAmount.fourOrMoreRooms}
                                                 isIncluded={isFourPlusRoomsAmountIncluded}
                                                 setIsIncluded={setIsFourPlusRoomsAmountIncluded}/>
                    </div>
                </div>
                <div>
                    <BigBtnBlock uniqueStyleCSSClass={"big-btn-block_style-yellowgreen"} btnText={"Пошук"}
                                 onClickFunc={btnOnClickFilteringObjDispatcher}/>
                </div>
            </div>
        </div>
    )
}