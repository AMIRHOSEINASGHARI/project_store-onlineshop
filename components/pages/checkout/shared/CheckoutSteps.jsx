"use client";

import { Steps } from "antd";
import { usePathname } from "next/navigation";

const CheckoutSteps = () => {
  const pathname = usePathname();

  const items = [
    {
      title: "Cart",
    },
    {
      title: "Shipping",
    },
    {
      title: "Payment",
    },
  ];

  const current = items.findIndex(
    (item) => item.title.toLocaleLowerCase() === pathname.split("/")[2]
  );

  return (
    <div className="max-md:mb-3 md:mb-10 mt-5 flex items-center justify-center w-full">
      <Steps size="default" current={current} items={items} />
    </div>
  );
};

export default CheckoutSteps;
