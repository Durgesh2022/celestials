import { Product } from "../types/product";
import Link from "next/link";


type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition">
     <Link href={`/detail`}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      </Link>
      <h2 className="text-lg font-semibold text-[#4A1A11]">{product.name}</h2>
      <p className="text-[#4A1A11] mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm text-[#4A1A11]">{product.description}</p>
    </div>
  );
};

export default ProductCard;
