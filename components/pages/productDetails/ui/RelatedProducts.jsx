// components
import TextHeader from "@/components/reusable/TextHeader";
import ProductCard from "../../products/ui/ProductCard";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader title="Related Products" />
      </div>
      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {relatedProducts.map((el) => (
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
