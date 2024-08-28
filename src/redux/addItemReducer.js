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

    editedItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    checkOutItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].checkedOut = !state[index].checkedOut;
      }
    }
  },
});

export const { addItem, deleteItem, editedItem, checkOutItem } = itemSlice.actions;
export default itemSlice.reducer;
