export enum roomAmount {
    oneRoom = '1',
    twoRooms = '2',
    threeRooms = '3',
    fourOrMoreRooms = '4+',
}
export enum rentalType {
    any= 'Будь-яка',
    longTerm = 'Довгострокова',
    daily = 'Подобова',
}
export enum districtEnum {
    Podilskyi= 'Подільський',
    Dniprovskyi= 'Дніпровський',
    Obolonskyi= 'Оболонський',
    Shevchenkovskyi= 'Шевченківський',
    Sviatoshynskyi= 'Святошинський',
    Solomianskyi= 'Солом\'янський',
    Golosyivskyi= 'Голосіївський',
    Desnyanskyi= 'Деснянський',
    Darnitskyi= 'Дарницький',
    Pecherskyi= 'Печерський',
}

export interface IfilteringParameters {
    districtInputValue : string
    inputPrice : {inputLowestPriceValue : string, inputHighestPriceValue : string}
    rentalTypeValue : string
    includedRoomsAmount : {
        isRoomsAmountFilterActive : boolean
        isOneRoomAmountIncluded : boolean
        isTwoRoomsAmountIncluded : boolean
        isThreeRoomsAmountIncluded : boolean
        isFourPlusRoomsAmountIncluded : boolean
    }
}

export interface IBaseFlat {
    district: string
    description: string
    price : number
    mainImage : string
    ownerPhoneNumber : string
    additionalImage : string
    address : string
    roomAmount : number
    rentalTermType : string
}

export interface IFlat {
    district: districtEnum
    id: string
    description: string
    price : number
    mainImage : string
    ownerPhoneNumber : string
    additionalImage : string
    address : string
    roomAmount : number
    rentalTermType : rentalType
}

export class Flat implements IFlat{
    public district: districtEnum
    public id: string
    public description: string
    public price : number
    public mainImage : string
    public ownerPhoneNumber : string
    public additionalImage : string
    public address : string
    public roomAmount : number
    public rentalTermType : rentalType
    constructor(id : string, district: districtEnum, description : string, price: number, image: string, address: string, roomAmount: number, rentalTermType : rentalType, additionalImage : string, ownerPhoneNumber: string) {
        this.id = id
        this.district = district
        this.description = description
        this.price = price
        this.mainImage = image
        this.address = address
        this.roomAmount = roomAmount
        this.rentalTermType = rentalTermType
        this.additionalImage = additionalImage
        this.ownerPhoneNumber = ownerPhoneNumber
    }
}