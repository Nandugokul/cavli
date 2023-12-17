import { useSelector } from "react-redux";
import cartIcon from "../../public/images/home/cartIcon.svg";
import closeIcon from "../../public/images/home/closeIcon.svg";

import CartSingleListing from "../store/components/CartSingleListing";
import { useState } from "react";
function CartComponent() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartUpdate = useSelector((state) => state.cartUpdate.cartDataList);
  const noOfCartItems = cartUpdate.length;
  console.log(cartUpdate);
  return (
    <>
      <section className="fixed bottom-10 right-10">
        <div
          onClick={() => {
            setCartOpen(true);
          }}
          className={`bg-blue-700 w-[4rem] h-[4rem] flex items-center justify-center rounded-full relative ${
            noOfCartItems >= 1 ? "flex" : "hidden"
          }`}
        >
          <img src={cartIcon} alt="" />
          <div
            className={`bg-red-700 w-[1.5rem] h-[1.5rem] absolute top-0 right-0 rounded-full flex justify-center items-center text-white ${
              noOfCartItems >= 1 ? "flex" : "hidden"
            }`}
          >
            {noOfCartItems}
          </div>
        </div>
      </section>
      <section
        className={`fixed w-1/2 top-0 right-0 h-full bg-white p-6 ${
          cartOpen ? "block" : "hidden"
        } `}
      >
        {cartUpdate.map((item) => {
          return (
            <CartSingleListing
              key={item.uniqueId}
              productName={item.productName}
              quantity={item.quantity}
              region={item.region}
            />
          );
        })}
        <div
          onClick={() => setCartOpen(false)}
          className="px-8 py-3 text-white font-bold bg-black absolute bottom-4 right-4"
        >
          Check Out
        </div>
        <img
          onClick={() => {
            setCartOpen(false);
          }}
          src={closeIcon}
          alt=""
          className="absolute top-4 right-4 z-50 w-[2rem]"
        />
      </section>
    </>
  );
}
export default CartComponent;
