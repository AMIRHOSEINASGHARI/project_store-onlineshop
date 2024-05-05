// next
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product.action";
// components
import ProductDetailsPage from "@/components/pages/productDetails/ProductDetailsPage";

const Product = ({ params }) => {
  return <ProductDetailsPage id={params.id} />;
};

export default Product;

export async function generateMetadata({ params }) {
  const data = await getProduct(params.id);

  if (data.code !== 200) {
    notFound();
  }

  return {
    title: {
      absolute: data.product.title,
    },
    description: data.product.description,
    keywords: data.product.keywords,
  };
}
