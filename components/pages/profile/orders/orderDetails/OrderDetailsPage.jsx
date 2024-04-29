import Image from "next/image";
import Link from "next/link";
import { getOrderDetails } from "@/actions/order.action";
import ProfilePageHeader from "../../shared/ProfilePageHeader";
import moment from "moment";
import { Table } from "antd";
import { icons, productColumn } from "@/constants";
import { reducePrice, shorterText } from "@/utils/functions";

const OrderDetailsPage = async ({ id }) => {
  try {
    const data = await getOrderDetails(id);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    const {
      order: {
        summary,
        _id,
        status,
        deliveryAddress,
        phoneNumber,
        displayName,
        paymentMethod,
        items,
        createdAt,
      },
    } = data;

    //   table data source
    const dataSource = items?.map((p) => ({
      key: JSON.parse(JSON.stringify(p._id)),
      image: (
        <Link target="_blank" href={`/products/${p.productId._id}`}>
          <Image
            src={p.productId.image}
            width={50}
            height={50}
            priority
            alt={p.productId.title}
          />
        </Link>
      ),
      title: (
        <Link target="_blank" href={`/products/${p.productId._id}`}>
          {shorterText(p.productId.title, 15)}
        </Link>
      ),
      cost:
        p.discount > 0 ? (
          <div className="">
            <p>${reducePrice(p.discount, p.cost).toLocaleString()}</p>
            <p className="line-through opacity-50 text-[12px]">
              {p.cost.toLocaleString()}
            </p>
          </div>
        ) : (
          <p>${p.cost.toLocaleString()}</p>
        ),
      quantity: p.quantity,
      discount: <p>%{p.discount}</p>,
      total: (
        <p>
          ${(reducePrice(p.discount, p.cost) * p.quantity).toLocaleString()}
        </p>
      ),
    }));

    return (
      <section>
        <ProfilePageHeader title="Order Details" />
        <Link
          href="/profile/orders"
          className="flex items-center gap-2 bg-gray-100 py-2 px-6 w-fit rounded-lg mb-[15px]"
        >
          {icons.leftArrow} <p className="font-light text-[12px]">Orders</p>
        </Link>
        <div>
          <div className="flex max-sm:flex-col gap-2 justify-between bg-gray-100 p-3">
            <p className="font-light text-[12px] text-gray-500">
              Order ID: {JSON.parse(JSON.stringify(_id))}
            </p>
            <p className="font-light text-[12px] text-gray-500">
              Placed on: {moment(createdAt).subtract(10, "days").calendar()}
            </p>
          </div>
        </div>
        <Table
          columns={productColumn}
          scroll={{ x: true }}
          pagination={false}
          dataSource={dataSource}
        />
        <div className="mt-[15px] flex flex-wrap gap-[15px]">
          <div className="cardShadow3 p-4 flex flex-col flex-1 h-fit min-w-[250px]">
            <h1 className="subheader mb-[10px]">Other Details</h1>
            <ul className="list-disc ml-[30px]">
              <li>
                <p className="subtitle text-gray-500">{deliveryAddress}</p>
              </li>
              <li>
                <p className="subtitle text-gray-500">{displayName}</p>
              </li>
              <li>
                <p className="subtitle text-gray-500">{phoneNumber}</p>
              </li>
            </ul>
          </div>
          <div className="cardShadow3 p-4 flex flex-col flex-1 h-fit min-w-[250px]">
            <h1 className="subheader">Summary</h1>
            <div className="space-y-[5px] my-[10px]">
              <div className="flex justify-between">
                <p className="subtitle">Total Products:</p>
                <p className="font-medium">{summary.totalProducts}</p>
              </div>
              <div className="flex justify-between">
                <p className="subtitle">Total Price:</p>
                <p className="font-medium">
                  ${summary.totalPrice.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="subtitle">Total Discount:</p>
                <p className="font-medium">${summary.totalDiscount}</p>
              </div>
              <div className="flex justify-between">
                <p className="subtitle">Total Paid:</p>
                <p className="font-medium">
                  ${summary.totalPayable.toLocaleString()}
                </p>
              </div>
            </div>
            <hr />
            <p className="subtitle my-[10px]">Paid with {paymentMethod}</p>
            <p
              className={`subtitle text-center py-1 rounded-full ${
                status === "Pending"
                  ? "bg-orange-100 text-orange-500"
                  : "bg-green-100 text-green-500"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default OrderDetailsPage;
