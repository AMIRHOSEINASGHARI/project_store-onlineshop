import { getProduct } from "@/actions/product.action";

const ProductDetailsPage = async ({ id }) => {
  const data = await getProduct(id);

  if (data.code !== 200) {
    return <h1>Error!</h1>;
  }

  return <main>ProductDetailsPage</main>;
};

export default ProductDetailsPage;
