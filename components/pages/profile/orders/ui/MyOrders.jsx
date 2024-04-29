"use client";

import Link from "next/link";
import { orderColumn } from "@/constants";
import { Table } from "antd";
import moment from "moment";

const MyOrders = ({ orders }) => {
  if (orders.length === 0) {
    return <p>You have 0 Orders</p>;
  }

  //   table data source
  const dataSource = orders?.map((o) => ({
    key: o._id,
    _id: (
      <Link href={`/profile/orders/${o._id}`} className="font-medium">
        {o._id}
      </Link>
    ),
    status: (
      <p
        className={`text-center w-fit rounded-full py-1 px-5 ${
          o.status === "Pending"
            ? "bg-orange-100 text-orange-500"
            : "bg-green-100 text-green-500"
        }`}
      >
        {o.status}
      </p>
    ),
    createdAt: <p>{moment(o.createdAt).subtract(10, "days").calendar()}</p>,
    totalPayable: <p>${o.summary.totalPayable.toLocaleString()}</p>,
  }));

  return (
    <section>
      <Table
        scroll={{ x: true }}
        pagination={false}
        columns={orderColumn}
        dataSource={dataSource}
        rowClassName=""
      />
    </section>
  );
};

export default MyOrders;
