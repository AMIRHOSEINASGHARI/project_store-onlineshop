import { getProducts } from "@/actions/product.action";
import ProductCard from "./ui/ProductCard";
import Pagination from "./ui/Pagination";
import SearchProducts from "./ui/SearchProducts";

const ProductsPage = async ({ searchParams }) => {
  const data = await getProducts(searchParams);

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  return (
    <main>
      <SearchProducts />
      {data.products.length !== 0 ? (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {data.products.map((el) => (
              <ProductCard {...el} key={el._id} />
            ))}
          </section>
          <Pagination
            totalPages={data.totalPages}
            searchParams={searchParams}
          />
        </>
      ) : (
        <h1>No Products!</h1>
      )}
    </main>
  );
};

export default ProductsPage;
