import ProductCard from "./ProductCard";
import { Product } from "../types/product";

type Props = {
  products: Product[];
};

const ProductsSection = ({ products }: Props) => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-[#4D5557]" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
