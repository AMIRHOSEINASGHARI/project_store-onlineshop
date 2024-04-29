import { getUser } from "@/actions/user.action";
import ProfilePageHeader from "../shared/ProfilePageHeader";
import MyOrders from "./ui/MyOrders";

const OrdersPage = async () => {
  try {
    const data = await getUser();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div>
        <ProfilePageHeader title="My Orders" />
        <MyOrders orders={JSON.parse(JSON.stringify(data?.user?.orders))} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default OrdersPage;
