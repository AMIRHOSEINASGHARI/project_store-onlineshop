import { getOrderDetails } from "@/actions/order.action";
import React from "react";

const OrderDetailsPage = async ({ id }) => {
  const data = await getOrderDetails(id);
  console.log(data);
  return <div>OrderDetailsPage</div>;
};

export default OrderDetailsPage;
