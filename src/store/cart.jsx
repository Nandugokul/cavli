import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = {
  quantity: 5,
  form: "",
  productName: "",
  region: "",
  cartDataList: [],
};
const cartUpdate = createSlice({
  name: "cartUpdate",
  initialState: initialState,
  reducers: {
    getCartData(state, actions) {
      let { quantity, uniqueId, productName, region, form } = actions.payload;
      console.log(quantity, uniqueId, productName, region, form);
    },
  },
});
export const cartSliceActions = cartUpdate.actions;
const cartStore = configureStore({
  reducer: { cartUpdate: cartUpdate.reducer },
});
export default cartStore;
