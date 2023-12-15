/* eslint-disable react/prop-types */
import productImage from "../../../../public/images/home/cavliProductImg.png";
import cartIcon from "../../../../public/images/home/cartIcon.svg";
function ProductCard(props) {
  return (
    <>
      <section className="bg-white flex flex-col items-center rounded-md p-4">
        <img className="w-1/2" src={productImage} alt="" />
        <h4 className="text-2xl fonr-medium my-3">{props.productName}</h4>
        <div className=" border-blue-700 border-2 rounded-3xl px-3 py-1 text-blue-700">
          {props.productSpec.toString()}
        </div>
        <div className="bg-blue-700 flex rounded-3xl px-3 py-2 mt-3">
          <img src={cartIcon} alt="" />
          <h6 className="font-bold text-white ml-2">ADD TO CART</h6>
        </div>
      </section>
    </>
  );
}
export default ProductCard;
