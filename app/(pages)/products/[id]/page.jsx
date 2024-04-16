import ProductDetailsPage from "@/components/pages/productDetails/ProductDetailsPage";

const Product = ({ params }) => {
  return <ProductDetailsPage id={params.id} />;
};

export default Product;
