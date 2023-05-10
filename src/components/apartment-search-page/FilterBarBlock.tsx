import "./style/FilterBarBlock.css"
import RoomAmountCheckboxBlock from "../common-components/flat-parameters-filtering-blocks/RoomAmountCheckboxBlock";
import {districtEnum, Flat, roomAmount} from "../../models";
import InputWithDropDownMenuBlock from "../common-components/flat-parameters-filtering-blocks/InputWithDropDownMenuBlock";
import {useAppSelector} from "../../app/hooks";
import PriceInputBlock from "../common-components/flat-parameters-filtering-blocks/PriceInputBlock";
import RadioBtnBlock from "../common-components/flat-parameters-filtering-blocks/RadioBtnBlock";
import BigBtnBlock from "../common-components/buttons/BigBtnBlock";
import {useState} from "react";

interface FilterBarBlockPropsInterface {
    
}
export default function FilterBarBlock ({}:FilterBarBlockPropsInterface){
    const districts = useAppSelector(({flatParameters: {initialParameters: {districtsArray}}}) => districtsArray)
    let [districtInputValue, setDistrictInputValue] = useState<string>('')
    let [inputLowestPriceValue, setInputLowestPriceValue] = useState<string>('')
    let [inputHighestPriceValue, setInputHighestLowestPriceValue] = useState<string>('')
    let [rentalTypeValue, setRentalTypeValue] = useState<string>('Any')

    let [isOneRoomAmountIncluded, setIsOneRoomAmountIncluded] = useState<boolean>(true)
    let [isTwoRoomsAmountIncluded, setIsTwoRoomsAmountIncluded] = useState<boolean>(true)
    let [isThreeRoomsAmountIncluded, setIsThreeRoomsAmountIncluded] = useState<boolean>(true)
    let [isFourPlusRoomsAmountIncluded, setIsFourPlusRoomsAmountIncluded] = useState<boolean>(true)

    const radioBtnName =  "rental-type"

    const flatFilteringSuitabilityDefiner = (flat : Flat) => {

        return true
    }
    const btnOnClickFilteringObjDispatcher = (e: React.MouseEvent) => {

    }
    return(
        <div className={"filter-bar-block dflex"}>
            <div className={"filter-bar-block__title"}><p>Оберіть параметри квартири</p></div>
            <div>
                <p>Виберіть район</p>
                <div className={"filter-bar-block__district-chooser"}>
                    <InputWithDropDownMenuBlock inputPlaceholder={"Оберіть район"} valuesArray={districts} inputValue={districtInputValue} setInputValue={setDistrictInputValue}/>
                </div>
            </div>
            <div>
                <p>Ціна</p>
                <PriceInputBlock inputPricePlaceholder={"Від"} inputPriceValue={inputLowestPriceValue} setInputPriceValue={setInputLowestPriceValue}/>
                <PriceInputBlock inputPricePlaceholder={"До"} inputPriceValue={inputHighestPriceValue} setInputPriceValue={setInputHighestLowestPriceValue}/>
            </div>
            <div>
                <p>Оберіть тип оренди</p>
                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={"Daily rent"}  radioBtnChosenValue={rentalTypeValue} setRadioBtnChosenValue={setRentalTypeValue} radioBtnDefaultValue={'Any'}/>Подобова</div>
                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={"Long term rent"} radioBtnChosenValue={rentalTypeValue} setRadioBtnChosenValue={setRentalTypeValue} radioBtnDefaultValue={'Any'}/>Довгострокова</div>
                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={"Any"} radioBtnChosenValue={rentalTypeValue} setRadioBtnChosenValue={setRentalTypeValue} radioBtnDefaultValue={'Any'}/>Будь-яка</div>
            </div>
            <div>
                <p>Оберіть кількість кімнат</p>
                <div className={"filter-bar-block__room-amount-checkboxes dflex"}>
                    <RoomAmountCheckboxBlock roomAmount={roomAmount.oneRoom} isIncluded={isOneRoomAmountIncluded}
                                             setIsIncluded={setIsOneRoomAmountIncluded}/>
                    <RoomAmountCheckboxBlock roomAmount={roomAmount.twoRooms} isIncluded={isTwoRoomsAmountIncluded}
                                             setIsIncluded={setIsTwoRoomsAmountIncluded}/>
                    <RoomAmountCheckboxBlock roomAmount={roomAmount.threeRooms} isIncluded={isThreeRoomsAmountIncluded}
                                             setIsIncluded={setIsThreeRoomsAmountIncluded}/>
                    <RoomAmountCheckboxBlock roomAmount={roomAmount.fourOrMoreRooms}
                                             isIncluded={isFourPlusRoomsAmountIncluded}
                                             setIsIncluded={setIsFourPlusRoomsAmountIncluded}/>
                </div>
            </div>
            <div>
                <BigBtnBlock uniqueStyleCSSClass={"big-btn-block_style-yellowgreen"} btnText={"Пошук"} onClickFucn={btnOnClickFilteringObjDispatcher}/>
            </div>
        </div>   
    )
}