import CourseCard from "./CourseCard";
import { Product } from "../types/product2";

type Props = {
  products: Product[];
};

const CourseSection = ({ products }: Props) => {
  return (
      <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
    <section className="py-10 px-4 max-w-7xl mx-auto">
      
      <h1 className="text-5xl font-bold mb-6 text-[#4D5557] text-center" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
          <CourseCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default CourseSection;
