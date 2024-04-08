import { getProducts } from "@/actions/product.action";
import ProductCard from "./ui/ProductCard";

const ProductsPage = async () => {
  const data = await getProducts();

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  if (data.products.length === 0) {
    return <h1>No Blogs Yet!</h1>;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
      {data.products.map((el) => (
        <ProductCard {...el} key={el._id} />
      ))}
    </main>
  );
};

export default ProductsPage;
