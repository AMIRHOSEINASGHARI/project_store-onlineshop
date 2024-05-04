"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Order } from "@/utils/models/order";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";

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

    // destructuring data:
    const {
      userData: { deliveryAddress, userId, phoneNumber, displayName },
      paymentMethod,
      items,
      summary,
    } = data;

    // Creating new order document:
    const newOrder = await Order.create({
      deliveryAddress,
      userId,
      phoneNumber,
      displayName,
      paymentMethod,
      items: items.map((item) => ({
        ...item,
        cost: item.productId.price,
        discount: item.productId.discount,
      })),
      summary,
    });

    // updating each product stock:
    items.forEach(async (item) => {
      const product = await Products.findById(item.productId);
      product.stock -= item.quantity;
      product.orders.push({
        orderId: newOrder._id,
        quantity: item.quantity,
      });
      await product.save();
    });

    // pushing order id to user's order field:
    user.orders.push(newOrder._id);
    // clearing user cart:
    user.cart = {
      items: [],
      selectedItems: [],
      totalProductsCount: 0,
      checkoutStatus: "pending",
    };

    await user.save();

    revalidatePath("/profile");

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

export const getUserOrders = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      return {
        message: "Un-Authorized!",
        status: "failed",
        code: 422,
      };
    }

    const orders = await User.findById(session?.userId)
      .populate({
        path: "orders",
        model: Order,
      })
      .select("orders");

    return {
      orders,
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

export const getOrderDetails = async (id) => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      return {
        message: "Un-Authorized!",
        status: "failed",
        code: 422,
      };
    }

    const order = await Order.findOne({ _id: id })
      .populate({
        path: "items.productId",
        model: Products,
        select: ["_id", "title", "image", "price", "discount"],
      })
      .lean();

    return {
      order,
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
