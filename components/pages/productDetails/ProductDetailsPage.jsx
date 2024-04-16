import { getProduct } from "@/actions/product.action";
import ProductSection from "./ui/ProductSection";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  return (
    <main className="lg:pt-[30px]">
      <ProductSection {...data.product} />
    </main>
  );
};

export default ProductDetailsPage;
