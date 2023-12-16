import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = { quantity: 5 };
const cartUpdate = createSlice({
  name: "cartUpdate",
  initialState: initialState,
  reducers: {
    getCartData(state, actions) {
      console.log(actions.payload.productName);
      console.log(actions.payload);
    },
  },
});
export const cartSliceActions = cartUpdate.actions;
const cartStore = configureStore({
  reducer: { cartUpdate: cartUpdate.reducer },
});
export default cartStore;
