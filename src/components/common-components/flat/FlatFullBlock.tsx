import "./style/FlatFullBlock.css"
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import FlatImageBlock from "./FlatImageBlock";
import FlatAddressTextBlock from "./FlatAddressTextBlock";
import FlatDistrictInfoBlock from "./FlatDistrictInfoBlock";
import Icon20pxBlock from "./Icon20pxBlock";
import districtIcon from "./images/district-icon.png";
import FlatPropertyBlock from "./FlatPropertyBlock";
import roomAmountIcon from "./images/room-amount-icon.png";
import priceIcon from "./images/price-icon.png";
import calendarIcon from "./images/calendar-icon.png";
import phoneIcon from "./images/phone-icon.png"
import FlatDescriptionBlock from "./FlatDescriptionBlock";
import CloseButton from "./CloseButton";
import {setCurrentFlat} from "../../../features/flatsSlice";
import React, {MutableRefObject} from "react";
interface FlatFullBlockPropsInterface {
    currentFlatBlockRef : MutableRefObject<HTMLDivElement | null>
}

export default function FlatFullBlock ({currentFlatBlockRef}:FlatFullBlockPropsInterface){
    const dispatch = useAppDispatch()
    const flat = useAppSelector(({flats: {currentFlat}}) => currentFlat)
    if (!flat) return (<></>)

    const closeButtonOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        dispatch(setCurrentFlat(null))
    }

    const {address, roomAmount, mainImage, additionalImage,ownerPhoneNumber, district, description, longTermRental, price} = flat
    return(
        <div className={"flat-full-block"} ref={currentFlatBlockRef}>
            <div className={"flat-full-block__header dflex"}>
                <FlatAddressTextBlock addressString={address}/>
                <div className={"flat-full-block__close-btn-wrap"}><CloseButton closeButtonOnClick={closeButtonOnClick}/></div>
            </div>
            <div className={"flat-full-block__images dflex"}>
                <div className={"flat-full-block__image-wrap"}>
                    <FlatImageBlock imageRef={mainImage}/>
                </div>
                <div className={"flat-full-block__image-wrap"}>
                    <FlatImageBlock imageRef={additionalImage}/>
                </div>
            </div>
            <div className={"flat-full-block__properties dflex"}>
                <FlatDistrictInfoBlock districtString={district}>
                    <Icon20pxBlock iconPng={districtIcon} altDescription={`Іконка район...`}/>
                </FlatDistrictInfoBlock>
                <FlatPropertyBlock text={`${roomAmount} кімн`}>
                    <Icon20pxBlock iconPng={roomAmountIcon} altDescription={"Іконка кількість кімнат..."}/>
                </FlatPropertyBlock>
                <FlatPropertyBlock text={`${price} грн`}>
                    <Icon20pxBlock iconPng={priceIcon} altDescription={"Іконка ціна..."}/>
                </FlatPropertyBlock>
                <FlatPropertyBlock text={longTermRental? "Довгостроково" : "Подобово"}>
                    <Icon20pxBlock iconPng={calendarIcon} altDescription={"Іконка телефон..."}/>
                </FlatPropertyBlock>
                <FlatPropertyBlock text={`+380${ownerPhoneNumber}`}>
                    <Icon20pxBlock iconPng={phoneIcon} altDescription={"Іконка календар"}/>
                </FlatPropertyBlock>
            </div>
            <FlatDescriptionBlock description={description}/>
        </div>
    )
}