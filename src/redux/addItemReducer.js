import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const itemSlice = createSlice({
  name: "shoppingItem",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },

    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    updateItem(state, action) {
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

// Export actions
export const { addItem, removeItem, updateItem, checkOutItem } = itemSlice.actions;

// Default export the reducer
export default itemSlice.reducer;
