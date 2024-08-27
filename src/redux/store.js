import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../redux/addItemReducer"; // Ensure correct import path

export const store = configureStore({
  reducer: {
    shoppingItem: itemReducer, // Ensure this name matches your state slice in ItemToDo
  },
});
