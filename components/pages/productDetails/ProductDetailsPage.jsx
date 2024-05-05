// actions
import { getProduct } from "@/actions/product.action";
// utils
import { getServerSession } from "@/utils/session";
// components
import ProductSection from "./ui/ProductSection";
import ProductComments from "./ui/ProductComments";
import ProductReview from "./ui/ProductReview";
import RelatedProducts from "./ui/RelatedProducts";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);
  const session = getServerSession();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  return (
    <main className="lg:pt-[30px] space-y-[50px]">
      <ProductSection {...data.product} session={session} />
      <ProductReview {...data.product} />
      <ProductComments
        comments={data.comments}
        productId={id}
        session={session}
      />
      <RelatedProducts relatedProducts={data.relatedProducts} />
    </main>
  );
};

export default ProductDetailsPage;
