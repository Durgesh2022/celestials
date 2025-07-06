// app/products/[id]/page.tsx
import { Product } from "../../types/product"; // adjust path as needed
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;

    const data = await res.json();
    return data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side: images */}
          <div className="flex flex-row space-x-12">
            <div className="flex flex-col space-y-3">
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                width={80}
                height={80}
                className="rounded shadow"
              />
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                width={80}
                height={80}
                className="rounded shadow"
              />
            </div>
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={400}
              height={400}
              className="rounded shadow"
            />
          </div>

          {/* Right side: product info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center space-x-3">
              {product.onSale === "Yes" && (
                <span className="text-2xl font-semibold line-through text-gray-500">
                  ₹{product.priceDrop + 50}
                </span>
              )}
              <span className="text-2xl font-bold text-red-600">
                ₹{product.priceDrop}
              </span>
            </div>

            <p className="mt-4 font-medium text-[#4D5557]">
              Delivery Info: <span className="font-bold">{product.deliveryInfo}</span>
            </p>

            <button className="mt-4 px-6 py-3 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <div className="mt-6 border-t pt-4">
              <h2 className="text-lg font-semibold mb-2 text-[#4D5557]">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
