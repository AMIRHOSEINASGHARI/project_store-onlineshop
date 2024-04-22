"use client";

import { icons } from "@/constants";
import { Drawer } from "antd";
import CartItemCard from "./CartItemCard";
import { Fragment } from "react";
import Link from "next/link";

const CartDrawer = ({ openCart, setOpenCart, cart, session }) => {
  const closeDrawer = () => {
    setOpenCart(false);
  };

  return (
    <Drawer
      title={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="iconSize">{icons.basket}</div>
            <span>{cart?.totalProductsCount} Items</span>
          </div>
          <button type="button" onClick={() => closeDrawer()}>
            {icons.close}
          </button>
        </div>
      }
      placement="right"
      onClose={closeDrawer}
      open={openCart}
      closeIcon={false}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      {session?.status === "un-authorized" && <p>Cart is Empty!</p>}
      {session?.status === "authorized" && (
        <>
          {cart?.items?.length === 0 && <p>Cart is Empty!</p>}
          {cart?.items?.length !== 0 && (
            <div className="space-y-[25px]">
              {cart?.items?.map((el, i) => (
                <Fragment key={el?._id}>
                  <CartItemCard {...el} />
                  {i < cart?.items?.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-100" />
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </>
      )}
      <Link
        href="/cart"
        className="bg-red-500 text-white rounded-lg py-2 w-full text-center hover:text-white"
      >
        View Cart
      </Link>
    </Drawer>
  );
};

export default CartDrawer;
