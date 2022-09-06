import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice, ui: uiSlice },
});

export default store;
