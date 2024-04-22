"use client";

import { icons } from "@/constants";
import { Drawer } from "antd";

const CartDrawer = ({ openCart, setOpenCart, cart }) => {
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
    ></Drawer>
  );
};

export default CartDrawer;
