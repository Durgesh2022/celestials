// app/page.tsx
import Header3 from '../components/header3';
import Layout from '../components/layout';
// import EnrollPage from '../components/enroll';
import Team from '../components/team';
import WellnessLandingPage from '../components/video';
import Enroll2 from '../components/courses';
import ProductsSection from '../products/ProductsSection'; // ✅ Import
import { Product } from '../types/product';

// ✅ Fetch products server-side
async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/all`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}

// ✅ Server Component (since we are fetching directly here)
export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Header3 />
      <Layout />
      {/* <EnrollPage /> */}
      <Enroll2 />
      {/* 🔹 Product Section */}
      <ProductsSection products={products} />
      
      
     

      <WellnessLandingPage />
       
      <Team />
    </div>
  );
}
