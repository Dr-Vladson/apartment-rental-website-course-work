import {districtEnum} from "../models";

export const valueOnlyIntegersValidator = (value: string) => {
    for (let i = 0; i < value.length; i++) {
        const char = value[i]
        if (i === 0 && char === '0') return false
        if (char !== '0' && char !== '1' && char !== '2' && char !== '3' && char !== '4' && char !== '5' && char !== '6' && char !== '7' && char !== '8' && char !== '9') {
            return false
        }
    }
    return true
}
export const valuePhoneNumberValidator = (value: string) => {
    if (!value.startsWith('+380')) return false
    if (value.length > 13) return false

    console.log(value.substring(4))
    return  valueOnlyIntegersValidator(value.substring(4))

    //for (let i = 1; i < value.length; i++) {
    //    const char = value[i]
    //    if (char !== '0' && char !== '1' && char !== '2' && char !== '3' && char !== '4' && char !== '5' && char !== '6' && char !== '7' && char !== '8' && char !== '9') {
    //        return false
    //    }
    //}
    //return true
}

export const formSubmitValidator = (isMainImageValid: boolean, isAdditionalImageValid: boolean, district : string,
address : string, price : string, phoneNumber : string, roomsAmount : string, description : string) => {
    if (!isMainImageValid) return 'Посилання на заголовну картинку не коректне'
    if (!isAdditionalImageValid) return 'Посилання на додаткову картинку не коректне'
    if (district !== districtEnum.Podilskyi && district !== districtEnum.Dniprovskyi && district !== districtEnum.Obolonskyi
        && district !== districtEnum.Shevchenkovskyi && district !== districtEnum.Sviatoshynskyi && district !== districtEnum.Solomianskyi
        && district !== districtEnum.Golosyivskyi && district !== districtEnum.Desnyanskyi && district !== districtEnum.Darnitskyi
        && district !== districtEnum.Pecherskyi){
        return 'Район введено некоректно'
    }
    if (!address) return 'Адреса введена некоректно'
    if (!price) return 'Ціна введена некоректно'
    if (phoneNumber.length !== 13) return 'Номер телефона введено некоректно (Не вистачає цифр)'
    if (!roomsAmount || +roomsAmount >= 100) return 'Кількість кімнат задана некоректно (Максимум 100 кімнат)'
    if (description.length < 200) return 'Опис має включати від 200 символів'
    return true
}