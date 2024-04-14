import ProductDetailsPage from "@/components/pages/product/ProductDetailsPage";

const Product = ({ params }) => {
  return <ProductDetailsPage id={params.id} />;
};

export default Product;
