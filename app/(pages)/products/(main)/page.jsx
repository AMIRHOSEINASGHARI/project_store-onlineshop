import ProductsPage from "@/components/pages/products/ProductsPage";

const Products = ({ searchParams }) => {
  return <ProductsPage searchParams={searchParams} />;
};

export default Products;

export const metadata = {
  title: `Products`,
};
