import ProductCard from "./components/ProductCard";
import data from "../../data/data.json";
import AddToCartFilter from "./components/AddToCartFilter";
import { useState } from "react";

function Home() {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState("");

  const handleOpenFilter = (filterOpen, category) => {
    setOpenFilter(filterOpen);
    setFilterProduct(category);
  };
  return (
    <>
      <section className="max-w-screen-xl flex flex-col items-center p-16 m-auto">
        <h1 className="text-white text-4xl font-bold mb-14">STORE HEADING</h1>
        <h4 className="text-slate-400 mb-10 text-2xl">Smart Modules</h4>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.category}
                category={item.category}
                productId={item.category}
                openFilter={handleOpenFilter}
              />
            );
          })}
        </section>
        <AddToCartFilter
          filterOpen={openFilter}
          setFilterOpen={() => {
            setOpenFilter(false);
          }}
          filterCategory={filterProduct}
        />
      </section>
    </>
  );
}
export default Home;
