import OrderDetailsPage from "@/components/pages/profile/orders/orderDetails/OrderDetailsPage";

const OrderDetails = ({ params: { id } }) => {
  return <OrderDetailsPage id={id} />;
};

export default OrderDetails;
