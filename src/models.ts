export enum roomAmount {
    oneRoom = '1',
    twoRooms = '2',
    threeRooms = '3',
    fourOrMoreRooms = '4+',
}
export enum districtEnum {
    Podilskyi= 'Подільський',
    Dniprovskyi= 'Дніпровський',
    Obolonskyi= 'Оболонський',
    Shevchenkovskyi= 'Шевченковський',
    Sviatoshynskyi= 'Святошинський',
    Solomianskyi= 'Солом\'янський',
    Golosyivskyi= 'Голосіївський',
    Desnyanskyi= 'Деснянський',
    Darnitskyi= 'Дарницький',
    Pecherskyi= 'Печерський',
}

export interface IfilteringParameters {
    districtInputValue : string
    inputPrice : {inputLowestPriceValue : number, inputHighestPriceValue : number}
    rentalTypeValue : string
    includedRoomsAmount : {
        isRoomsAmountFilterActive : boolean
        isOneRoomAmountIncluded : boolean
        isTwoRoomsAmountIncluded : boolean
        isThreeRoomsAmountIncluded : boolean
        isFourPlusRoomsAmountIncluded : boolean
    }
}

export class Flat {
    public district: districtEnum
    public id: number
    public description: string
    public price : number
    public mainImage : string
    public ownerPhoneNumber : string
    public additionalImage : string
    public address : string
    public roomAmount : roomAmount
    public longTermRental : boolean
    constructor(id : number, district: districtEnum, description : string, price: number, image: string, address: string, roomAmount: roomAmount, longTermRental : boolean, additionalImage : string, ownerPhoneNumber: string) {
        this.id = id
        this.district = district
        this.description = description
        this.price = price
        this.mainImage = image
        this.address = address
        this.roomAmount = roomAmount
        this.longTermRental = longTermRental
        this.additionalImage = additionalImage
        this.ownerPhoneNumber = ownerPhoneNumber
    }
}