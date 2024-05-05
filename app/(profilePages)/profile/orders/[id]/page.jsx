// utils
import { shorterText } from "@/utils/functions";
// components
import OrderDetailsPage from "@/components/pages/profile/orders/orderDetails/OrderDetailsPage";

const OrderDetails = ({ params: { id } }) => {
  return <OrderDetailsPage id={id} />;
};

export default OrderDetails;

export async function generateMetadata({ params: { id } }) {
  return {
    title: `Orders | ${shorterText(id, 10)}`,
  };
}
