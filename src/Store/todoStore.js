import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Slice/todoSlice";

const todoStore = configureStore({
  reducer: todoSlice.reducer,
});

export default todoStore;
