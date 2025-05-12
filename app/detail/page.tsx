// app/product/page.tsx (Next.js 13+ App Router)
import Image from "next/image";

const ProductPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
    <div className="min-h-screen p-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side: images */}
        <div className="flex flex-row  space-x-12">
          <div className="flex flex-col space-y-3">
            <Image
              src="/card.jpg"
              alt="T-shirt thumbnail 1"
              width={80}
              height={80}
              className="rounded shadow"
            />
            <Image
              src="/card.jpg"
              alt="T-shirt thumbnail 2"
              width={80}
              height={80}
              className="rounded shadow"
            />
          </div>
          <Image
            src="/card.jpg"
            alt="Main T-shirt"
            width={400}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* Right side: product info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt || T-Shirt (Polo-18-21)
          </h1>

          <div className="mt-4 flex items-center space-x-3">
            <span className="text-2xl font-semibold line-through text-gray-500">
              ₹489
            </span>
            <span className="text-2xl font-bold text-red-600">₹474.33</span>
          </div>

          <p className="mt-4 font-medium text-[#4D5557]">Delivery Charges: <span className="font-bold">₹40</span></p>
          <button className="mt-4 px-6 py-3 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold mb-2 text-[#4D5557]">Description</h2>
            <p className="text-gray-700">
              This versatile men’s T-shirt is an excellent choice for a variety of casual occasions,
              providing both comfort and style. Designed with a classic plain pattern, it offers a
              timeless look that pairs well with almost any outfit. The T-shirt features short sleeves,
              making it ideal for warmer weather or layering under jackets and sweaters during cooler seasons.
              Please note that the actual color of the T-shirt might vary slightly from what is shown in the product images.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
