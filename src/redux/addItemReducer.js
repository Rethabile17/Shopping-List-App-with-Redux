import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const itemSlice = createSlice({
  name: "shoppingItem",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
