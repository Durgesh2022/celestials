import { Product } from "../types/product2";
import Link from "next/link";
type Props = {
  product: Product;
};

const CourseCard = ({ product }: Props) => {
  return (
    <div className="w-3/5 relative">
      <div className="gradient-border-wrapper aspect-[5/5] w-[300px] mx-auto rounded-full p-1">
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-white p-4 flex flex-col items-center justify-center text-center group">
          {/* Main Content */}
          <div className="transition duration-300 group-hover:blur-sm">
            <h2 className="text-lg font-semibold text-[#4A1A11]">{product.name}</h2>
            <p className="text-sm text-[#4A1A11]">{product.description}</p>
            <p className="text-[#4A1A11] mb-2">${product.price.toFixed(2)}</p>
          </div>

          {/* Hover Button */}
        <Link href="/CourseDetail">
  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#4A1A11] text-white px-4 py-2 rounded-full">
    Explore More
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;
