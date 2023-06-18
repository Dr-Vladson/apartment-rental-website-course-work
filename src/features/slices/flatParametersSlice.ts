import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {districtEnum, IfilteringParameters, rentalType} from "../../models";

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
            inputPrice : {inputLowestPriceValue : '', inputHighestPriceValue : ''},
            rentalTypeValue : rentalType.any,
            includedRoomsAmount : {
                isRoomsAmountFilterActive : false,
                isOneRoomAmountIncluded : false,
                isTwoRoomsAmountIncluded : false,
                isThreeRoomsAmountIncluded : false,
                isFourPlusRoomsAmountIncluded : false,
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
    },
});

export const {setFilteringParametersObj} = flatParametersSlice.actions
export default flatParametersSlice.reducer
