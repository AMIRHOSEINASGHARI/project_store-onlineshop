import { getCart } from "@/actions/cart.action";

const CartPage = async () => {
  try {
    const data = await getCart();
    console.log(data);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return <div>CartPage</div>;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CartPage;
