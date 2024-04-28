"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import CheckoutSteps from "../shared/CheckoutSteps";
import { QUERY_KEY } from "@/services/queryKeys";
import { getUserCart } from "@/services/queries";
import Loader from "@/components/shared/Loader";
import EmptyCart from "@/components/shared/cart/EmptyCart";
import RightBar from "../shared/RightBar";
import { icons } from "@/constants";
import { Radio } from "antd";
import Image from "next/image";
import { reducePrice } from "@/utils/functions";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const onChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const payment = [
    {
      value: "Credit Card",
      icon: icons.creditCard,
      title: "Pay with Credit Card",
    },
    {
      value: "Paypal",
      icon: icons.paypal,
      title: "Pay with Paypal",
    },
    {
      value: "Cash On Delivery",
      icon: icons.handShake,
      title: "Cash On Delivery",
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user_cart],
    queryFn: getUserCart,
    cacheTime: 0,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <main className="w-full flex justify-center">
        <Loader />
      </main>
    );
  }

  if (data?.code !== 200) {
    return <p>Error!</p>;
  }

  if (data?.cart?.totalProductsCount === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <CheckoutSteps />
      <main className="flex gap-[20px] max-lg:flex-col lg:items-start">
        <section className="max-lg:w-full lg:w-3/4 space-y-[20px]">
          <div className="flex justify-end">
            <Link
              href="/checkout/shipping"
              className="flex items-center gap-2 border-2 rounded-lg py-2 px-6"
            >
              <div>{icons.leftArrow}</div>
              <p className="subtitle">Back to shipping</p>
            </Link>
          </div>
          <div className="cardShadow3 p-6 space-y-[30px]">
            <h1 className="subheader">Payment Method</h1>
            <Radio.Group
              onChange={onChange}
              size="large"
              value={paymentMethod}
              className="flex flex-col gap-[15px]"
            >
              {payment.map((el, i) => (
                <Fragment key={el.value}>
                  <Radio
                    value={el.value}
                    className="flex items-center gap-[15px]"
                  >
                    <div className="flex items-center gap-[8px]">
                      <div className="iconSize">{el.icon}</div>
                      <p className="text-[18px] font-light">{el.title}</p>
                    </div>
                  </Radio>
                  {i < payment.length - 1 && <hr />}
                </Fragment>
              ))}
            </Radio.Group>
          </div>
          <div className="cardShadow3 p-6 space-y-[30px]">
            <h1 className="subheader">Order Summary</h1>
            <div className="flex justify-end">
              <p className="subtitle bg-gray-200 rounded-full py-1 px-3 w-fit">
                {data?.cart?.totalProductsCount} Products
              </p>
            </div>
            {data?.cart?.items?.map((el, i) => (
              <Fragment key={el.productId._id}>
                <div>
                  <Image
                    src={el.productId.image}
                    width={100}
                    height={100}
                    alt={el.productId.title}
                    priority
                    className="mb-2"
                  />
                  <div className="subtitle flex items-center gap-2">
                    <p>Number:</p>
                    <p>{el.quantity}</p>
                  </div>
                  <div className="subtitle flex items-center gap-2">
                    <p>Price:</p>
                    <p>
                      ${" "}
                      {(
                        reducePrice(el.productId.discount, el.productId.price) *
                        el.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                {i < data?.cart?.items?.length - 1 && <hr />}
              </Fragment>
            ))}
          </div>
        </section>
        <RightBar
          cart={data.cart}
          nextRoute="/checkout/shipping"
          buttonTitle="Pay off"
          buttonClassName="bg-green-500 text-white"
        />
      </main>
    </>
  );
};

export default PaymentPage;
