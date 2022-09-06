import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiSlice },
});

export default store;
