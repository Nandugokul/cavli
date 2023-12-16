/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SingleElementDetail(props) {
  const handleQuantityDecrese = () => {
    if (cartData.quantity > 5) {
      const newQuantity = cartData.quantity - 1;
      setCartData({ ...cartData, quantity: newQuantity });
      props.quantityChange({ [props.uniqueId]: newQuantity });
    } else if (cartData.quantity === 5) {
      setButtonChange(false);
    }
  };
  const handleQuantityIncrease = () => {
    if (cartData.quantity < 10) {
      const newQuantity = cartData.quantity + 1;
      setCartData({ ...cartData, quantity: newQuantity });
      props.quantityChange({ [props.uniqueId]: newQuantity });
    }
  };

  const handleAddVariant = () => {
    setButtonChange(true);
  };
  const [buttonChange, setButtonChange] = useState(false);
  const [cartData, setCartData] = useState({});
  const cartUpdate = useSelector((state) => {
    return state.cartUpdate;
  });
  useEffect(() => {
    setCartData(cartUpdate);
  }, [cartUpdate]);
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
            onClick={handleAddVariant}
            className={`bg-blue-700 text-white font-semibold rounded-2xl px-4 py-1 ${
              buttonChange ? "hidden" : "block"
            } `}
          >
            ADD VARIANT
          </button>
          <div className={`${buttonChange ? "block" : "hidden"} flex`}>
            <button
              onClick={handleQuantityDecrese}
              className="bg-blue-700 rounded-tl-xl rounded-bl-xl h-8 w-8 text-white"
            >
              -
            </button>
            <div className="h-8 w-12 flex items-center justify-center border-black/50 border mx-2">
              {cartData.quantity}
            </div>
            <button
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
