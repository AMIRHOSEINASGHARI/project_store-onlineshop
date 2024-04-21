"use server";

import connectDB from "@/utils/connectDB";
import { Comments } from "@/utils/models/comment";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";

// Gets All Products By Filter
export const getProducts = async (searchParams) => {
  try {
    await connectDB();
    const { page, search, has_selling_stock, has_discount, sort, category } =
      searchParams;

    let query = {};
    let filters = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (has_selling_stock) {
      filters.stock = { $gt: 0 };
    }
    // product discount filter
    if (has_discount) {
      has_discount == 1
        ? (filters.discount = { $gt: 0 })
        : (filters.discount = 0);
    }
    // product category filter
    if (category) {
      filters.category = category;
    }

    const pageNumber = page || 1;
    const perPage = 12;
    const totalProducts = await Products.countDocuments({
      ...query,
      ...filters,
    });
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await Products.find({ ...query, ...filters })
      .sort({
        ...(sort == 1
          ? { createdAt: -1 }
          : sort == 2
          ? { createdAt: 1 }
          : sort == 3
          ? { price: -1 }
          : sort == 4
          ? { price: 1 }
          : sort == 5
          ? { orders: -1 }
          : {}),
        stock: -1,
      })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .lean();

    return {
      products,
      totalPages,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      products: null,
      status: "failed",
      code: 500,
    };
  }
};

// Gets last 4 Products Published
export const getLatestProducts = async () => {
  try {
    await connectDB();
    const products = await Products.find({ stock: { $gt: 0 } })
      .limit(8)
      .sort({ createdAt: -1 })
      .lean();

    return {
      products,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      products: null,
      status: "failed",
      code: 500,
    };
  }
};

// Gets A Single Product using Product ID
export const getProduct = async (id) => {
  try {
    await connectDB();
    const product = await Products.findOne({ _id: id }).lean();
    const productCategory = product.category;
    const relatedProducts = await Products.find({
      category: productCategory,
      stock: { $gt: 0 },
    }).lean();

    return {
      product,
      relatedProducts,
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      product: null,
      status: "failed",
      code: 500,
    };
  }
};

export const addProductComment = async (formData, productId, userId) => {
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
    const { title, description } = formData;

    const product = await Products.findById(productId);
    const newComment = await Comments.create({
      title,
      description,
      productId,
      senderId: userId,
    });

    await product.comments.push(newComment?._id);
    await product.save();

    return {
      message: "Your comment has send!",
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      message: "Server Error!",
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
