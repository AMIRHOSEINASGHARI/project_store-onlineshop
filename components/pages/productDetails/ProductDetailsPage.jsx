// components
import ProductSection from "./ui/ProductSection";
import ProductComments from "./ui/ProductComments";
import RelatedProducts from "./ui/RelatedProducts";

const ProductDetailsPage = async ({ id }) => {
  return (
    <main className="lg:pt-[30px] space-y-[50px]">
      <ProductSection id={id} />
      <ProductComments id={id} />
      <RelatedProducts id={id} />
    </main>
  );
};

export default ProductDetailsPage;
