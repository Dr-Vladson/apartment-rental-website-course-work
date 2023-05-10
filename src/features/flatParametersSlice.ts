import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {districtEnum, IfilteringParameters, roomAmount} from "../models";

class roomsAmountInclusionArrayElement {
    private roomsAmount: roomAmount;
    constructor(roomsAmount : roomAmount) {
        this.roomsAmount = roomsAmount
    }
}
interface FlatParametersSliceStateInterface {
    initialParameters:{
        districtsArray : districtEnum []
    }
    filteringParameters: IfilteringParameters
}

const initialState: FlatParametersSliceStateInterface = {
    initialParameters : {
        districtsArray : [districtEnum.Darnitskyi, districtEnum.Desnyanskyi, districtEnum.Golosyivskyi, districtEnum.Dniprovskyi, districtEnum.Pecherskyi,
            districtEnum.Solomianskyi, districtEnum.Shevchenkovskyi, districtEnum.Sviatoshynskyi, districtEnum.Podilskyi, districtEnum.Obolonskyi],
    },
    filteringParameters:{
            districtInputValue : '',
            inputPrice : {inputLowestPriceValue : 1, inputHighestPriceValue : 0},
            rentalTypeValue : 'Any',
            includedRoomsAmount : {
                isRoomsAmountFilterActive : false,
                isOneRoomAmountIncluded : true,
                isTwoRoomsAmountIncluded : true,
                isThreeRoomsAmountIncluded : true,
                isFourPlusRoomsAmountIncluded : true,
        }
    }
}

export const flatParametersSlice = createSlice({
    name: 'flatParameters',
    initialState,
    reducers: {
        setFilteringParametersObj: (state, action: PayloadAction<IfilteringParameters>) => {
            state.filteringParameters = action.payload
        },
        //toggleIncludedRoomAmount: (state, action: PayloadAction<roomAmount>) => {
        //    switch (action.payload){
        //        case roomAmount.oneRoom: state.roomsAmount.oneRoom? state.roomsAmount.oneRoom = false : state.roomsAmount.oneRoom = true; break
        //        case roomAmount.twoRooms: state.roomsAmount.twoRooms? state.roomsAmount.twoRooms = false : state.roomsAmount.twoRooms = true; break
        //        case roomAmount.threeRooms: state.roomsAmount.threeRooms? state.roomsAmount.threeRooms = false : state.roomsAmount.threeRooms = true; break
        //        case roomAmount.fourOrMoreRooms: state.roomsAmount.fourOrMoreRooms? state.roomsAmount.fourOrMoreRooms = false : state.roomsAmount.fourOrMoreRooms = true; break
        //    }
        //},
    },
});

export const {setFilteringParametersObj} = flatParametersSlice.actions
export default flatParametersSlice.reducer
