import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartValue = current(state.cart);
      const addedItem = cartValue.filter((item) => {
        return item.id === action.payload.id;
      })[0];
      const count = addedItem ? addedItem.count + 1 : 1;
      const cartItem = {
        ...action.payload,
        count,
      };

      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = [...state.cart, cartItem];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
