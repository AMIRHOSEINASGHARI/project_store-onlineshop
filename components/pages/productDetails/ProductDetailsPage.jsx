import { getProduct } from "@/actions/product.action";
import ProductSection from "./ui/ProductSection";
import ProductComments from "./ui/ProductComments";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  return (
    <main className="lg:pt-[30px] space-y-[50px]">
      <ProductSection {...data.product} />
      <ProductComments comments={data.product.comments} />
    </main>
  );
};

export default ProductDetailsPage;
