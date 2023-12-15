import ProductCard from "./components/ProductCard";
import data from "../../data/data.json";
import AddToCartFilter from "./components/AddToCartFilter";

console.log(data);

function Home() {
  return (
    <>
      <section className="max-w-screen-xl flex flex-col items-center p-16 m-auto">
        <h1 className="text-white text-4xl font-bold mb-14">STORE HEADING</h1>
        <h4 className="text-slate-400 mb-10 text-2xl">Smart Modules</h4>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.productId}
                productName={item.productName}
                productSpec={item.formFactors}
              />
            );
          })}
        </section>
        <AddToCartFilter />
      </section>
    </>
  );
}
export default Home;
