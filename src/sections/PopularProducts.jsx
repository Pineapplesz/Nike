import { products } from "../constans";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-planquin font-bold max-sm:text-4xl max-sm:text-center">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gra">
          Experience top-notch quality and style with our sought-after selection
          . Discover a world of comfort, design, and value
        </p>
      </div>
      <div
        className="mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
      sm:gap-4 gap-14 sm:items-center"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
