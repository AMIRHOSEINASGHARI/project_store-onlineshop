"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Comments } from "@/utils/models/comment";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";

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

    const products = await Products.find({ ...filters, ...query })
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
    const product = await Products.findById(id)
      .populate({
        path: "comments",
        model: Comments,
        populate: {
          path: "senderId",
          model: User,
        },
      })
      .lean();

    const comments = product.comments.filter((item) => item.published);

    const productCategory = product.category;
    const relatedProducts = await Products.find({
      category: productCategory,
      stock: { $gt: 0 },
    }).lean();

    return {
      product,
      relatedProducts,
      comments,
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

export const addProductComment = async (data) => {
  try {
    await connectDB();

    const session = getServerSession();
    if (!session) {
      return {
        message: "You are un-authorized!",
        status: "failed",
        code: 422,
      };
    }

    const {
      form: { title, description },
      productId,
      userId,
    } = data;

    const product = await Products.findById(productId);
    const user = await User.findById(userId);
    const newComment = await Comments.create({
      title,
      description,
      productId,
      senderId: userId,
    });

    await product.comments.push(newComment?._id);
    await product.save();
    await user.comments.push(newComment?._id);
    await user.save();

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

export const deleteProductComment = async (data) => {
  try {
    await connectDB();
    const session = getServerSession();

    if (!session) {
      return {
        message: "You are un-authorized!",
        status: "failed",
        code: 422,
      };
    }

    const { commentId, productId } = data;

    const comment = await Comments.findOneAndDelete(commentId);

    const user = await User.findById(session?.userId);
    const product = await Products.findById(productId);
    const user_comment_index = user.comments.findIndex((item) =>
      item.equals(commentId)
    );
    const product_comment_index = product.comments.findIndex((item) =>
      item.equals(commentId)
    );

    user.comments.splice(user_comment_index, 1);
    await user.save();
    product.comments.splice(product_comment_index, 1);
    await product.save();

    revalidatePath("/profile");

    return {
      message: "Your comment deleted successfully",
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
