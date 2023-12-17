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
    getCartData(state, action) {
      const { quantity, uniqueId, productName, region, form } = action.payload;
      const existingItemIndex = state.cartDataList.findIndex(
        (item) => item.uniqueId === uniqueId
      );
      const updatedCartDataList =
        existingItemIndex !== -1
          ? [
              ...state.cartDataList.slice(0, existingItemIndex),
              { quantity, uniqueId, productName, region, form },
              ...state.cartDataList.slice(existingItemIndex + 1),
            ]
          : [
              ...state.cartDataList,
              { quantity, uniqueId, productName, region, form },
            ];
      state.cartDataList = updatedCartDataList;
      console.log(state.cartDataList);
    },
  },
});
export const cartSliceActions = cartUpdate.actions;
const cartStore = configureStore({
  reducer: { cartUpdate: cartUpdate.reducer },
});
export default cartStore;
