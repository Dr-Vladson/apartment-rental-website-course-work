import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import flatParametersSlice from "../features/flatParametersSlice";
import flatsSlice from "../features/flatsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flatParameters : flatParametersSlice,
    flats: flatsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
