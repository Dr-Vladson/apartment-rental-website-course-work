import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFlat} from "../../models";

interface FlatsSliceStateInterface {
    flatsArray : IFlat []
    userFlatsArray : IFlat [],
    currentFlat : IFlat | null
    userCurrentFlat : IFlat | null,
    isFlatAddFormActive : boolean
}

const initialState: FlatsSliceStateInterface = {
    flatsArray : [],
    userFlatsArray : [],
    currentFlat : null,
    userCurrentFlat : null,
    isFlatAddFormActive : false
}

export const flatsSlice = createSlice({
    name: 'flats',
    initialState,
    reducers: {
        toggleIsFlatAddFormActive: (state ) => {
            state.isFlatAddFormActive = !state.isFlatAddFormActive
        },
        setCurrentFlat: (state, action:  PayloadAction<IFlat | null>) => {
            state.currentFlat = action.payload
        },
        setUserCurrentFlat: (state, action:  PayloadAction<IFlat | null>) => {
            state.userCurrentFlat = action.payload
        },
        setFlats : (state, action: PayloadAction<IFlat []>) => {
            state.flatsArray = action.payload
        },
        addFlat : (state, action: PayloadAction<IFlat>) => {
            state.flatsArray.push(action.payload)
            state.userFlatsArray.push(action.payload)
        },
        deleteFlat: (state, action: PayloadAction<string>) => {
            state.flatsArray.splice(state.flatsArray.findIndex(flat => flat.id === action.payload), 1)
            state.userFlatsArray.splice(state.userFlatsArray.findIndex(flat => flat.id === action.payload), 1)
        },
        updateFlat: (state, action : PayloadAction<IFlat>) => {
            state.flatsArray[state.flatsArray.findIndex(flat => flat.id === action.payload.id)] = action.payload
            state.userFlatsArray[state.userFlatsArray.findIndex(flat => flat.id === action.payload.id)] = action.payload
        },
    },
});
export const {setCurrentFlat, setFlats, toggleIsFlatAddFormActive, setUserCurrentFlat, addFlat, deleteFlat, updateFlat} = flatsSlice.actions
export default flatsSlice.reducer
