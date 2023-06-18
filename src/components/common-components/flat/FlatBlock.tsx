import {Flat} from "../../../models"
import "./style/FlatBlock.css"
import FlatImageBlock from "./FlatImageBlock"
import FlatAddressTextBlock from "./FlatAddressTextBlock"
import FlatDistrictInfoBlock from "./FlatDistrictInfoBlock"
import districtIcon from "./images/district-icon.png"
import roomAmountIcon from "./images/room-amount-icon.png"
import priceIcon from "./images/price-icon.png"
import calendarIcon from "./images/calendar-icon.png"
import Icon20pxBlock from "./Icon20pxBlock"
import FlatPropertyBlock from "./FlatPropertyBlock"

interface FlatBlockPropsInterface {
    children ?: React.ReactNode
    flat : Flat
    currentFlatSetter ?: (flat: Flat) => void
}
export default function FlatBlock ({flat,currentFlatSetter, children, flat : {address, mainImage ,price, district, roomAmount, rentalTermType}}:FlatBlockPropsInterface){
    const flatOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        currentFlatSetter && currentFlatSetter(flat)
    }
    return(
        <div className={"flat-block"} onClick={flatOnClick}>
            <div className={"flat-block__image-wrap"}>
                <FlatImageBlock imageRef={mainImage}/>
            </div>
            <div className={"flat-block__parameters-wrap dflex"}>
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
                    <FlatPropertyBlock text={rentalTermType}>
                        <Icon20pxBlock iconPng={calendarIcon} altDescription={"Іконка календар..."}/>
                    </FlatPropertyBlock>
                </div>
                {children}
            </div>
        </div>   
    )
}