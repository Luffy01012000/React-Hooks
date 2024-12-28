import type { PayloadAction } from "@reduxjs/toolkit";
import type { CounterState } from "./types/types";

// todo add types
export const setLoadingAction = (state: CounterState) => {
  state.isLoading = true;
};

export const incrementAction = (state: CounterState) => {
  //   setLoading;
  state.value += 1;
  //   state.isLoading = false;
};

export const decrementAction = (state: CounterState) => {
  state.value -= 1;
};

// Use the PayloadAction type to declare the contents of `action.payload`
export const incrementByAmountAction = (
  state: CounterState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};

// action.ts
// export const increment = () => ({ type: "INCREMENT" });
// export const decrement = () => ({ type: "DECREMENT" });
// export const incrementByAmount = (amount: number) => ({
//   type: "INCREMENT_BY_AMOUNT",
//   payload: amount,
// });
// export const setLoading = (loading: boolean) => ({
//   type: "SET_LOADING",
//   payload: loading,
// });
