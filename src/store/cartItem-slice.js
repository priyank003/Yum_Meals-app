import { createSlice } from "@reduxjs/toolkit";

const initialCartItem = { cartItems: [], quantity: 0, price: 0 };

const cartSlice = createSlice({
  name: "cartItem",
  initialState: initialCartItem,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
      state.quantity = state.cartItems.length;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
