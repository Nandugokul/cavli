/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/cart";

function SingleElementDetail(props) {
  const cartDispatch = useDispatch();
  const handleQuantityDecrese = (e) => {
    if (cartData.quantity > 5) {
      setCartData({
        ...cartData,
        quantity: cartData.quantity - 1,
        uniqueId: e.target.value,
        productName: e.target.dataset.productname,
        region: e.target.dataset.region,
        form: e.target.dataset.form,
      });
    } else if (cartData.quantity === 5) {
      setButtonChange(false);
      // setCartData({
      //   ...cartData,
      //   quantity: 5,
      //   uniqueId: e.target.value,
      //   productName: "",
      //   region: "",
      //   form: "",
      // });
      cartDispatch(cartSliceActions.deleteFromCart(e.target.value));
    }
  };
  const handleQuantityIncrease = (e) => {
    if (cartData.quantity < 10) {
      setCartData({
        ...cartData,
        quantity: cartData.quantity + 1,
        uniqueId: e.target.value,
        productName: e.target.dataset.productname,
        region: e.target.dataset.region,
        form: e.target.dataset.form,
      });
    }
  };
  const handleAddVariant = (e) => {
    setButtonChange(true);
    setCartData({
      ...cartData,
      quantity: cartData.quantity,
      uniqueId: e.target.value,
      productName: e.target.dataset.productname,
      region: e.target.dataset.region,
      form: e.target.dataset.form,
    });
  };
  const [buttonChange, setButtonChange] = useState(false);
  const [cartData, setCartData] = useState({
    quantity: 5,
    uniqueId: "",
    productName: "",
    region: "",
    form: "",
  });
  useEffect(() => {
    if (cartData.uniqueId !== "" && cartData.uniqueId !== null) {
      cartDispatch(cartSliceActions.getCartData(cartData));
    }
  }, [cartData]);
  return (
    <>
      <div className="flex py-4">
        <div className="w-[20%]">
          <h6>{props.productName}</h6>
        </div>
        <div className="w-[25%]">
          <h6>{props.region}</h6>
        </div>
        <div className="w-[10%]">
          <h6>{props.eSim}</h6>
        </div>
        <div className="w-[20%]">
          <h6>{props.formFactor}</h6>
        </div>
        <div className="w-[25%] flex justify-center items-center">
          <button
            data-productname={props.productName}
            data-region={props.region}
            data-form={props.formFactor}
            value={props.uniqueId}
            onClick={handleAddVariant}
            className={`bg-blue-700 text-white font-semibold rounded-2xl px-4 py-1 ${
              buttonChange ? "hidden" : "block"
            } `}
          >
            ADD VARIANT
          </button>
          <div className={`${buttonChange ? "block" : "hidden"} flex`}>
            <button
              data-productname={props.productName}
              data-region={props.region}
              data-form={props.formFactor}
              onClick={handleQuantityDecrese}
              value={props.uniqueId}
              className="bg-blue-700 rounded-tl-xl rounded-bl-xl h-8 w-8 text-white"
            >
              -
            </button>
            <div className="h-8 w-12 flex items-center justify-center border-black/50 border mx-2">
              {cartData.quantity}
            </div>
            <button
              data-productname={props.productName}
              data-region={props.region}
              data-form={props.formFactor}
              value={props.uniqueId}
              onClick={handleQuantityIncrease}
              className="bg-blue-700 rounded-tr-xl rounded-br-xl h-8 w-8 text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleElementDetail;
