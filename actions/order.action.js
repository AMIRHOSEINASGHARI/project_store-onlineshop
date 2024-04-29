"use server";

import connectDB from "@/utils/connectDB";
import { Order } from "@/utils/models/order";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";

export const createOrder = async (data) => {
  try {
    await connectDB();

    const session = getServerSession();

    // If user token has expired:
    if (!session) {
      return {
        message: "Un-Authorized!",
        status: "failed",
        code: 422,
      };
    }

    const user = await User.findById(session?.userId);

    // If user not found:
    if (!user) {
      return {
        message: "User not found!",
        status: "failed",
        code: 404,
      };
    }
    // If user cart is empty:
    if (user.cart.totalProductsCount === 0) {
      return {
        message: "Cart is Empty",
        status: "failed",
        code: 404,
      };
    }

    const {
      userData: { deliveryAddress, userId, phoneNumber, displayName },
      paymentMethod,
      items,
      summary,
    } = data;

    const newOrder = await Order.create({
      deliveryAddress,
      userId,
      phoneNumber,
      displayName,
      paymentMethod,
      items,
      summary,
    });

    user.orders.push(newOrder._id);
    user.cart = {
      items: [],
      selectedItems: [],
      totalProductsCount: 0,
      checkoutStatus: "pending",
    };

    await user.save();

    return {
      message: "Order completed",
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      message: "Server Error",
      status: "failed",
      code: 500,
    };
  }
};
