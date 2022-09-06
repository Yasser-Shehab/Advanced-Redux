import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    reset(state) {
      state.items = [];
    },
    increaseQty(state, payload) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
