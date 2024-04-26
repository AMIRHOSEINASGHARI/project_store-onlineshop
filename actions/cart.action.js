"use server";

import connectDB from "@/utils/connectDB";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";

export const getCart = async () => {
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

    const cart = await User.findById(session?.userId).select("cart").populate({
      path: "cart.items.productId",
      model: Products,
    });

    return {
      cart: cart.cart,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      user: null,
      status: "failed",
      code: 500,
    };
  }
};

export const addToCart = async (productId) => {
  try {
    const session = getServerSession();
    if (!session) {
      return {
        message: "You are un-authorized!",
        status: "failed",
        code: 422,
      };
    }

    await connectDB();

    const user = await User.findById(session.userId);

    if (!user) {
      return {
        message: "User not found!",
        status: "failed",
        code: 404,
      };
    }

    // Update the cart field of the user document with the new item
    const existingCartItemIndex = user.cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    if (existingCartItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      user.cart.items[existingCartItemIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it as a new item
      user.cart.items.push({ productId, quantity: 1 });
    }

    // Update other fields of the cart as necessary
    user.cart.selectedItems = user.cart.items.map((item) => item.productId);
    user.cart.totalProductsCount = user.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    await user.save();

    return {
      message: "Proccess finished",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};

export const decreaseFromCart = async (productId) => {
  try {
    const session = getServerSession();
    if (!session) {
      return {
        message: "You are un-authorized!",
        status: "failed",
        code: 422,
      };
    }

    await connectDB();

    const user = await User.findById(session.userId);

    if (!user) {
      return {
        message: "User not found!",
        status: "failed",
        code: 404,
      };
    }

    const existingCartItemIndex = user.cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    if (user.cart.items[existingCartItemIndex].quantity === 1) {
      user.cart.items.splice(existingCartItemIndex, 1);
    } else {
      user.cart.items[existingCartItemIndex].quantity -= 1;
    }

    user.cart.selectedItems = user.cart.items.map((item) => item.productId);
    user.cart.totalProductsCount = user.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    await user.save();

    return {
      message: "Proccess finished",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};
