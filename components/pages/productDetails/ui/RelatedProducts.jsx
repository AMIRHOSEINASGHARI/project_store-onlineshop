// components
import TextHeader from "@/components/reusable/TextHeader";
import ProductCard from "../../products/ui/ProductCard";
import { getRelatedProducts } from "@/actions/product.action";

const RelatedProducts = async ({ id }) => {
  const data = await getRelatedProducts(id);

  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader title="Related Products" />
      </div>
      {data.relatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.relatedProducts.map((el) => (
            <ProductCard {...el} key={el._id} />
          ))}
        </div>
      ) : (
        <p className="text-center subtitle">No Products Yet!</p>
      )}
    </section>
  );
};

export default RelatedProducts;
