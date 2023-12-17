/* eslint-disable react/prop-types */
import productImg from "../../../public/images/home/cavliProductImg.png";
function CartSingleListing(props) {
  return (
    <>
      <div>
        <img src={productImg} alt="" className="w-[20%]" />
        <div className="grid grid-cols-3 mt-4 border-y-2 py-2">
          <div>
            <h1 className="text-xl font-medium mb-3">Item</h1>
            <h4>{props.productName}</h4>
          </div>
          <div>
            <h1 className="text-xl font-medium mb-3">Region</h1>
            <h4>{props.region}</h4>
          </div>
          <div>
            <h1 className="text-xl font-medium mb-3">Quantity</h1>
            <h4>{props.quantity}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartSingleListing;
