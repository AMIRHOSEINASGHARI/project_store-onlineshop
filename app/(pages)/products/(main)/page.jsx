import ProductsPage from "@/components/pages/products/ProductsPage";

export const dynamic = "force-dynamic";

const Products = ({ searchParams }) => {
  return <ProductsPage searchParams={searchParams} />;
};

export default Products;

export const metadata = {
  title: `Products`,
};
