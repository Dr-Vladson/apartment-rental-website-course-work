import {createAsyncThunk} from "@reduxjs/toolkit";
import {addFlat, deleteFlat, setFlats, updateFlat} from "../slices/flatsSlice";
import {IBaseFlat} from "../../models";


export const setGetFlatsAsync = createAsyncThunk(
    'flats/setAxiosGet',
    async (_,thunkApi) => {
        try {
            const resp = await fetch('http://localhost:8888/get-flats')
            const data = await resp.json()
            thunkApi.dispatch(setFlats(data))
        }
        catch (e:unknown) {
            console.log(e)
        }
    }
)
export const setPostFlatAsync = createAsyncThunk(
    'flats/setPostedFlat',
    async (baseFlat : IBaseFlat, thunkApi) => {
        try {
            const resp = await fetch('http://localhost:8888/create-flat', {
                method: 'POST',
                body:JSON.stringify(baseFlat),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await resp.json()
            console.log(data)
            thunkApi.dispatch(addFlat(data))
        }
        catch (e:unknown) {
            console.log(e)
        }
    }
)
export const setFlatDeleteAsync = createAsyncThunk(
    'flats/setFlatDelete',
    async (flatId : string, thunkApi) => {
        try {
            let resp = await fetch('http://localhost:8888/delete-flat/' + flatId,{
                method: 'DELETE',
            })
            let data = await resp.json()
            console.log(data)
            thunkApi.dispatch(deleteFlat(flatId))
        }
        catch (e){console.log(e)}
    }
)
export const setFlatUpdateAsync = createAsyncThunk(
    'flats/setFlatUpdate',
    async (updateObj: {baseFlat : IBaseFlat, id : string}, thunkApi) => {
        try {
            let resp = await fetch('http://localhost:8888/update-flat/' + updateObj.id,{
                method: 'PATCH',
                body:JSON.stringify(updateObj.baseFlat),
                headers: {
                    'Content-Type': 'application/json'
                }})
            let data = await resp.json()
            console.log(data)
            thunkApi.dispatch(updateFlat(data))
        }
        catch (e){console.log(e)}
    }
)


