import "./style/FlatAddEditForm.css"
import ImageInputBlock from "../common-components/flat-parameters-filtering-blocks/ImageInputBlock";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import TextArea from "../common-components/flat-parameters-filtering-blocks/TextArea";
import InputWithDropDownMenuBlock
    from "../common-components/flat-parameters-filtering-blocks/InputWithDropDownMenuBlock";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {IBaseFlat, rentalType} from "../../models";
import RadioBtnBlock from "../common-components/flat-parameters-filtering-blocks/RadioBtnBlock";
import InputBlock from "../common-components/flat-parameters-filtering-blocks/InputBlock";
import {formSubmitValidator, valueOnlyIntegersValidator, valuePhoneNumberValidator} from "../../features/validators";
import BigBtnBlock from "../common-components/buttons/BigBtnBlock";
import ErrorMessageBlock from "../common-components/flat-parameters-filtering-blocks/ErrorMessageBlock";
import CloseButton from "../common-components/buttons/CloseButton";
import {setUserCurrentFlat, toggleIsFlatAddFormActive} from "../../features/slices/flatsSlice";
import {setFlatUpdateAsync, setPostFlatAsync} from "../../features/async-action-creators/AsyncActionCreators";

interface FlatAddEditFormPropsInterface {
    flatToEditId ?: string
    mainImageDefaultLink?: string
    additianalImageDefaultLink?: string
    descriptionDefault?: string
    districtDefault?: string
    rentalTypeDefault?: string
    priceDefault?: string
    addressDefault?: string
    phoneNumberDefault?: string
    roomAmountDefault?: string
}

export default function FlatAddEditForm({
                                            flatToEditId,
                                            mainImageDefaultLink,
                                            additianalImageDefaultLink,
                                            descriptionDefault,
                                            districtDefault,
                                            rentalTypeDefault,
                                            priceDefault,
                                            addressDefault,
                                            roomAmountDefault,
                                            phoneNumberDefault
                                        }: FlatAddEditFormPropsInterface) {
    const dispatch = useAppDispatch()
    const isFlatAddFormActive = useAppSelector(({flats: {isFlatAddFormActive}}) => isFlatAddFormActive)
    if (isFlatAddFormActive && flatToEditId) {
        dispatch(toggleIsFlatAddFormActive())
    }

    let [errorMessage, setErrorMessage] = useState('')
    // картинки
    let [mainImageLink, setMainImageLink] = useState<string>(mainImageDefaultLink || '')
    let [isMainImageValid, setIsMainImageValid] = useState<boolean>(false)
    let [additionalImageLink, setAdditionalImageLink] = useState<string>(additianalImageDefaultLink || '')
    let [isAdditionalImageValid, setIsAdditionalImageValid] = useState<boolean>(false)
    const checkImgSrc = (src: string, validnessSetter: Dispatch<SetStateAction<boolean>>) => {
        const img = new Image()
        img.onload = function () {
            console.log(`valid src: ${src}`)
            validnessSetter(true)
        }
        img.onerror = function () {
            console.log(`invalid src: ${src}`)
            validnessSetter(false)
        }
        img.src = src
    }
    useEffect(() => {
        checkImgSrc(mainImageLink, setIsMainImageValid)
    }, [mainImageLink])
    useEffect(() => {
        checkImgSrc(additionalImageLink, setIsAdditionalImageValid)
    }, [additionalImageLink])
    // опис
    let [description, setDescription] = useState<string>(descriptionDefault || '')
    const descriptionMinimalAmountOfsymbols = 300
    // район
    const districts = useAppSelector(({flatParameters: {initialParameters: {districtsArray}}}) => districtsArray)
    let [districtInputValue, setDistrictInputValue] = useState<string>(districtDefault || '')
    // тип оренди
    const radioBtnName = "rental-type"
    let [rentalTypeValue, setRentalTypeValue] = useState<string>(rentalTypeDefault || rentalType.any)
    // ціна
    let [inputPriceValue, setInputPriceValue] = useState<string>(priceDefault || '')
    const priceInputBlockStyleClassName = ''
    // адреса
    let [inputAdressValue, setInputAdressValue] = useState<string>(addressDefault || '')
    const adressInputBlockStyleClassName = ''
    // номер
    let [inputPhoneNumberValue, setInputPhoneNumberValue] = useState<string>(phoneNumberDefault || '+380')
    const phoneNumberInputBlockStyleClassName = ''
    // кількість кімнат
    let [inputRoomAmountValue, setInputRoomAmountValue] = useState<string>(roomAmountDefault || '')
    const roomAmountInputBlockStyleClassName = ''

    const btnClearFormOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        setMainImageLink('')
        setAdditionalImageLink('')
        setDescription('')
        setDistrictInputValue('')
        setRentalTypeValue(rentalType.any)
        setInputPriceValue('')
        setInputAdressValue('')
        setInputPhoneNumberValue('+380')
        setInputRoomAmountValue('')
    }
    const btnSubmitOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        const submitStatus : string | boolean = formSubmitValidator(isMainImageValid, isAdditionalImageValid,districtInputValue,inputAdressValue, inputPriceValue, inputPhoneNumberValue, inputRoomAmountValue,description)
        if (submitStatus !== true) setErrorMessage(submitStatus)
        else {
            setErrorMessage('')
            const baseFlat: IBaseFlat = {
                description,
                mainImage: mainImageLink,
                additionalImage: additionalImageLink,
                price: +inputPriceValue,
                district: districtInputValue,
                address: inputAdressValue,
                roomAmount: +inputRoomAmountValue,
                rentalTermType: rentalTypeValue,
                ownerPhoneNumber: inputPhoneNumberValue
            }

            if (isFlatAddFormActive){
                dispatch(setPostFlatAsync(baseFlat))
                dispatch(toggleIsFlatAddFormActive())
            }
            else if (flatToEditId) {
                dispatch(setFlatUpdateAsync({baseFlat, id : flatToEditId}))
                dispatch(setUserCurrentFlat(null))
            }



            //if (flatToEditId) dispatch(setUserCurrentFlat(null))
        }
    }
    const btnCloseFormOnClick = (e : React.MouseEvent) => {
        e.preventDefault()
        if (flatToEditId) dispatch(setUserCurrentFlat(null))
        if (isFlatAddFormActive) dispatch(toggleIsFlatAddFormActive())
    }

    return (
        <div className={"flat-form-wrap"}>
            <div className={"position-page-centre flat-form dflex"}>
                <div className={"flat-form__close-btn-wrap"}><CloseButton closeButtonOnClick={btnCloseFormOnClick}/></div>
                <div className={"flat-form__image-inputs-container dflex"}>
                    <div>
                        <p>Посилання на заголовну картинку</p>
                        <div className={"flat-form__image-input-wrap"}>
                            <ImageInputBlock imageLink={mainImageLink} setMainImageLink={setMainImageLink}
                                             isImageValid={isMainImageValid}/>
                        </div>
                    </div>
                    <div>
                        <p>Посилання на додаткову картинку</p>
                        <div className={"flat-form__image-input-wrap"}>
                            <ImageInputBlock imageLink={additionalImageLink} setMainImageLink={setAdditionalImageLink}
                                             isImageValid={isAdditionalImageValid}/>
                        </div>
                    </div>
                </div>
                <div className={"flat-form__parameters-container dflex"}>
                    <div>
                        <p>Район, в якому розташовується квартира</p>
                        <div>
                            <InputWithDropDownMenuBlock inputPlaceholder={"Введіть район"} valuesArray={districts}
                                                        inputValue={districtInputValue}
                                                        setInputValue={setDistrictInputValue}/>
                        </div>
                    </div>
                    <div className={"flat-form__small-filters-block dflex"}>
                        <div>
                            <div>
                                <p>Адреса</p>
                                <InputBlock inputPlaceholder={"Введіть адресу"} inputValue={inputAdressValue}
                                            setInputValue={setInputAdressValue}
                                            uniqueStylesClassNames={adressInputBlockStyleClassName}/>
                            </div>
                            <div>
                                <p>Тип оренди</p>
                                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.longTerm}
                                                    radioBtnChosenValue={rentalTypeValue}
                                                    setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.longTerm}
                                </div>
                                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.daily}
                                                    radioBtnChosenValue={rentalTypeValue}
                                                    setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.daily}
                                </div>
                                <div><RadioBtnBlock radioBtnName={radioBtnName} radioBtnValue={rentalType.any}
                                                    radioBtnChosenValue={rentalTypeValue}
                                                    setRadioBtnChosenValue={setRentalTypeValue}/>{rentalType.any}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Вартість оренди</p>
                                <InputBlock inputPlaceholder={"Введіть вартість оренди"} inputValue={inputPriceValue}
                                            setInputValue={setInputPriceValue}
                                            inputValidator={valueOnlyIntegersValidator}
                                            uniqueStylesClassNames={priceInputBlockStyleClassName}/>
                            </div>
                            <div>
                                <p>Ваш номер телефону</p>
                                <InputBlock inputPlaceholder={"Введіть номер телефону"} inputValue={inputPhoneNumberValue}
                                            setInputValue={setInputPhoneNumberValue}
                                            inputValidator={valuePhoneNumberValidator}
                                            uniqueStylesClassNames={phoneNumberInputBlockStyleClassName}/>
                            </div>
                            <div>
                                <p>Кількість кімнат</p>
                                <InputBlock inputPlaceholder={"Введіть кількість кімнат"} inputValue={inputRoomAmountValue}
                                            setInputValue={setInputRoomAmountValue}
                                            inputValidator={valueOnlyIntegersValidator}
                                            uniqueStylesClassNames={roomAmountInputBlockStyleClassName}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Опис квартири</p>
                        <div className={"flat-form__description-textarea-wrap"}>
                            <TextArea text={description} setText={setDescription}/>
                        </div>
                    </div>
                    <div>
                        <ErrorMessageBlock errorMessage={errorMessage}/>
                        <div className={"flat-form__btns-container dflex"}>
                            <div>
                                <BigBtnBlock uniqueStyleCSSClass={'big-btn-block_style-transparent-black-border'} btnText={flatToEditId? "Редагувати квартиру" : "Додати квартиру"}
                                             onClickFunc={btnSubmitOnClick}/>
                            </div>
                            <div>
                                <BigBtnBlock uniqueStyleCSSClass={'big-btn-block_style-transparent-black-border'} btnText={"Очистити форму"}
                                             onClickFunc={btnClearFormOnClick}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}