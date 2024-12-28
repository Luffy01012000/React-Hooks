import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../store/store";
import {
  setLoadingAction,
  incrementAction,
  decrementAction,
  incrementByAmountAction,
} from "./action";
import type { CounterState } from "./types/types";

// Define the initial state using that type
const initialState: CounterState = {
  isLoading: false,
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: setLoadingAction,
    increment: incrementAction,
    decrement: decrementAction,
    incrementByAmount: incrementByAmountAction,
  },
});

export const { setLoading, increment, decrement, incrementByAmount } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
