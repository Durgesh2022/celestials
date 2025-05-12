import ProductsSection from "../components/ProductsSection";
import { Product } from "../types/product";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Stylish Sneakers",
    image: "/card.jpg",
    price: 59.99,
    description: "Comfortable and trendy sneakers for daily wear.",
  },
  {
    id: "2",
    name: "Denim Jacket",
    image: "/products/jacket.jpg",
    price: 89.99,
    description: "Classic blue denim with a modern cut.",
  },
  {
    id: "3",
    name: "Smart Watch",
    image: "/products/watch.jpg",
    price: 199.99,
    description: "Track fitness, notifications, and more.",
  },
  {
    id: "4",
    name: "Wireless Headphones",
    image: "/products/headphones.jpg",
    price: 129.99,
    description: "Noise-cancelling and crystal-clear sound.",
  },
];

export default function Home() {
  return <ProductsSection products={sampleProducts} />;
}
