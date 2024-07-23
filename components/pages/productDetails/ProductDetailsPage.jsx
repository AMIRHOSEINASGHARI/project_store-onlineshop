// actions
import { getProduct } from "@/actions/product.action";
// components
import ProductSection from "./ui/ProductSection";
import ProductComments from "./ui/ProductComments";
import RelatedProducts from "./ui/RelatedProducts";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);

  return (
    <main className="lg:pt-[30px] space-y-[50px]">
      <ProductSection id={id} />
      <ProductComments comments={data.comments} productId={id} />
      <RelatedProducts relatedProducts={data.relatedProducts} />
    </main>
  );
};

export default ProductDetailsPage;
