import {Flat} from "../../../models";
import "./style/FlatBlock.css"
import FlatImageBlock from "./FlatImageBlock";
import FlatAddressTextBlock from "./FlatAddressTextBlock";
import FlatDistrictInfoBlock from "./FlatDistrictInfoBlock";
import districtIcon from "./images/district-icon.png"
import roomAmountIcon from "./images/room-amount-icon.png"
import priceIcon from "./images/price-icon.png"
import calendarIcon from "./images/calendar-icon.png"
import Icon20pxBlock from "./Icon20pxBlock";
import FlatPropertyBlock from "./FlatPropertyBlock";

interface FlatBlockPropsInterface {
    flat : Flat
    currentFlatSetter : (flat: Flat) => void
}
export default function FlatBlock ({flat,currentFlatSetter, flat : {address, mainImage,description,price,district, roomAmount, longTermRental}}:FlatBlockPropsInterface){
    const FlatOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        currentFlatSetter(flat)
    }
    return(
        <div className={"flat-block"} onClick={FlatOnClick}>
            <div className={"flat-block__image-wrap"}>
                <FlatImageBlock imageRef={mainImage}/>
            </div>
            <FlatAddressTextBlock addressString={address}/>
            <FlatDistrictInfoBlock districtString={district}>
                <Icon20pxBlock iconPng={districtIcon} altDescription={`Іконка район...`}/>
            </FlatDistrictInfoBlock>
            <div className={"flat-block__properties dflex"}>
                <FlatPropertyBlock text={`${roomAmount} кімн`}>
                    <Icon20pxBlock iconPng={roomAmountIcon} altDescription={"Іконка кількість кімнат..."}/>
                </FlatPropertyBlock>
                <FlatPropertyBlock text={`${price} грн`}>
                    <Icon20pxBlock iconPng={priceIcon} altDescription={"Іконка ціна..."}/>
                </FlatPropertyBlock>
                <FlatPropertyBlock text={longTermRental? "Довгостроково" : "Подобово"}>
                    <Icon20pxBlock iconPng={calendarIcon} altDescription={"Іконка календар..."}/>
                </FlatPropertyBlock>
            </div>
        </div>   
    )
}