import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-slice";
import sideNavSlice from "./sideNav-slice";
import cartSlice from "./cartItem-slice";
const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    sideNav: sideNavSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
