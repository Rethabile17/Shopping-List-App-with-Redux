import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../redux/addItemReducer"; 

export const store = configureStore({
  reducer: {
    shoppingItem: itemReducer, 
  },
});
