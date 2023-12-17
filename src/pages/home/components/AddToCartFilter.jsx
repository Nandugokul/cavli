/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleElementDetail from "./SingleElementDetail";
import data from "../../../data/data.json";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/cart";
import closeIcon from "../../../../public/images/home/closeIcon.svg";
import CartComponent from "../../../ui/CartComponent";

function AddToCartFilter(props) {
  // const [filter, setFilter] = useState({
  //   regionOfTesting: "",
  //   eSim: "",
  //   formFactors: "",
  // });
  const cartDispatch = useDispatch();

  const [region, setRegion] = useState("");
  const [sim, setSim] = useState("");
  const [form, setForm] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredList, setfilteredList] = useState(productList);

  useEffect(() => {
    const filteredItems = productList.filter((item) => {
      return (
        (!region || region === item.regionOfTesting) &&
        (!sim || sim === item.eSim) &&
        (!form || form === item.formFactors)
      );
    });

    console.log(filteredItems);
    setfilteredList(filteredItems);
  }, [sim, region, form]);

  useEffect(() => {
    let categoryList = [];
    data.forEach((item) => {
      if (item.category === props.filterCategory) {
        categoryList = item.products;
      }
    });

    let updatedCategoryList = [];
    categoryList.forEach((item) => {
      if (item.formFactors.length > 1 || item.regionOfTesting.length > 1) {
        const newItems = [];
        item.formFactors.forEach((formFactor) => {
          item.regionOfTesting.forEach((region) => {
            const newItem = {
              ...item,
              formFactors: formFactor,
              regionOfTesting: region,
              uniqueId: uuidv4(),
            };
            newItems.push(newItem);
          });
        });
        updatedCategoryList = [...updatedCategoryList, ...newItems];
      } else {
        const formFactor =
          item.formFactors.length === 1
            ? item.formFactors[0]
            : item.formFactors;
        const region =
          item.regionOfTesting.length === 1
            ? item.regionOfTesting[0]
            : item.regionOfTesting;

        const newItem = {
          ...item,
          formFactors: formFactor,
          regionOfTesting: region,
          uniqueId: uuidv4(),
        };
        updatedCategoryList.push(newItem);
      }
    });

    setProductList(updatedCategoryList);
    setfilteredList(updatedCategoryList);
  }, [props.filterCategory]);

  const [quantityData, setQuantityData] = useState({});

  const handleQuantityChange = (data) => {
    const updatedQuantityData = { ...quantityData };

    Object.entries(data).forEach(([uniqueId, newQuantity]) => {
      if (updatedQuantityData.hasOwnProperty(uniqueId)) {
        const product = filteredList.find((item) => item.uniqueId === uniqueId);

        if (product) {
          updatedQuantityData[uniqueId] = {
            productName: product.productName,
            quantity: newQuantity,
          };
        }
      } else {
        updatedQuantityData[uniqueId] = {
          quantity: newQuantity,
        };
      }
    });

    setQuantityData(updatedQuantityData);
    console.log(updatedQuantityData);
    cartDispatch(cartSliceActions.getCartData(updatedQuantityData));
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name == "regionOfTesting") {
      setRegion(value);
    } else if (name == "eSim") {
      setSim(value);
    } else if (name == "formFactors") {
      setForm(value);
    }
  };

  return (
    <>
      <section className={`${props.filterOpen ? "block" : "hidden"}`}>
        <div className="h-screen w-full bg-black/50 absolute top-0 left-0 flex justify-center overflow-y-auto">
          <div className="bg-white rounded-sm max-w-screen-xl w-3/4 relative px-12 py-6 mt-20 h-fit">
            <h1 className="text-3xl font-light">{props.filterCategory}</h1>
            <div className="mt-6 border-black/20 border p-6 rounded-md w-full">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-8 w-full">
                  <div className="flex flex-col space-y-4 flex-grow">
                    <label className="">Region</label>
                    <select
                      name="regionOfTesting"
                      value={region}
                      className="px-3 py-2 bg-transparent border-black/20 rounded-md border outline-0"
                      onChange={handleFilterChange}
                    >
                      <option value="select" hidden>
                        Select
                      </option>
                      <option value="GLOBAL">GLOBAL</option>
                      <option value="APAC">APAC</option>
                      <option value="NAM">NAM</option>
                      <option value="SAM">SAM</option>
                      <option value="EU">EU</option>
                      <option value="SAMEU" hidden>
                        SAM EU
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-4 flex-grow">
                    <label className="">E-Sim</label>
                    <select
                      name="eSim"
                      className="px-3 py-2 bg-transparent border-black/20 rounded-md border outline-0"
                      onChange={handleFilterChange}
                      value={sim}
                    >
                      <option value="select" hidden>
                        Select
                      </option>
                      <option value="YES">Yes</option>
                      <option value="NO">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-4 flex-grow">
                    <label className="">Form factors</label>
                    <select
                      name="formFactors"
                      className="px-3 py-2 bg-transparent border-black/20 rounded-md border outline-0"
                      onChange={handleFilterChange}
                      value={form}
                    >
                      <option value="select" hidden>
                        Select
                      </option>
                      <option value="M.2">M.2</option>
                      <option value="minPIC">minPIC</option>
                      <option value="LGA">LGA</option>
                      <option value="MiniPCI">MiniPCI</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setForm("");
                    setSim("");
                    setRegion("");
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-6 self-end"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="flex mt-4 border-b border-black/20 pb-3">
              <div className="w-[20%]">
                <h6>Name</h6>
              </div>
              <div className="w-[25%]">
                <h6>Region</h6>
              </div>
              <div className="w-[10%]">
                <h6>E-Sim</h6>
              </div>
              <div className="w-[20%]">
                <h6>Form Factor</h6>
              </div>
              <div className="w-[25%] flex justify-center items-center">
                <h6>Quantity</h6>
              </div>
            </div>
            <div
              className={`flex flex-col items-center justify-center h-32 ${
                filteredList.length === 0 ? "flex" : "hidden"
              }`}
            >
              <div>No Variants found</div>
              <div className="mt-3 text-slate-500">Try filtering</div>
            </div>
            <div
              className={`${filteredList.length === 0 ? "hidden" : "block"}`}
            >
              {filteredList.map((item) => {
                return (
                  <SingleElementDetail
                    key={item.uniqueId}
                    productName={item.productName}
                    region={item.regionOfTesting}
                    eSim={item.eSim}
                    formFactor={item.formFactors}
                    uniqueId={item.uniqueId}
                    quantityChange={handleQuantityChange}
                  />
                );
              })}
            </div>

            <div className="float-right mt-6">
              <button
                onClick={() => {
                  props.setFilterOpen(false);
                }}
                className="px-4 py-2 border border-black/40 rounded-md mr-4"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  props.setFilterOpen(false);
                }}
                className="px-4 py-2 border border-blue-700 bg-blue-700 text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
            <img
              src={closeIcon}
              alt="closeIcon"
              className="w-[2rem] absolute top-3 right-3"
              onClick={() => {
                props.setFilterOpen(false);
              }}
            />
          </div>
        </div>
      </section>
      <CartComponent />
    </>
  );
}
export default AddToCartFilter;
