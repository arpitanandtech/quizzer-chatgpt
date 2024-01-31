import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slice/quizSlice";

const store  = configureStore({
  reducer: {
    quiz: quizSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;