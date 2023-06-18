import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import flatParametersSlice from "../features/slices/flatParametersSlice";
import flatsSlice from "../features/slices/flatsSlice";

export const store = configureStore({
  reducer: {
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
