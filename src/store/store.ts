import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/reduxToolkit/store/reducer";
// import countReducer from "./slices/firstSlice";
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
  //   middleware: []
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
