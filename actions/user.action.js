"use server";

// next
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// models
import { Comments } from "@/utils/models/comment";
import { Order } from "@/utils/models/order";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import { Like } from "@/utils/models/like";
// jwt
import { sign } from "jsonwebtoken";
import { Blogs } from "@/utils/models/blogs";

export const getUser = async () => {
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

    const user = await User.findById(session?.userId)
      .populate({
        path: "comments",
        model: Comments,
        populate: {
          path: "productId",
          model: Products,
        },
      })
      .populate({
        path: "orders",
        model: Order,
      })
      .populate({
        path: "likes",
        model: Like,
        populate: {
          path: "product",
          model: Products,
        },
      })
      .populate({
        path: "likes",
        model: Like,
        populate: {
          path: "blog",
          model: Blogs,
        },
      })
      .select("-password")
      .lean();

    return {
      user,
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

export const updateUserInfo = async (form) => {
  try {
    await connectDB();

    const session = getServerSession();

    if (!session) {
      return {
        message: "Un-Authorized or session has expired!",
        status: "failed",
        code: 422,
      };
    }

    const { username, displayName, phoneNumber, address } = form;
    const user = await User.findById(session?.userId);

    // check username existancy
    if (username !== session?.username) {
      const checkUsername = await User.findOne({ username });
      if (checkUsername) {
        return {
          message: "Username already Exists!",
          status: "failed",
          code: 422,
        };
      }
    }

    // updating user information
    user.username = username;
    user.displayName = displayName;
    user.phoneNumber = phoneNumber;
    user.address = address;

    await user.save();

    // creating token
    const accessToken = sign({ username, userId: user._id }, SECRET_KEY, {
      expiresIn: SESSION_EXPIRATION,
    });

    // setting token in cookie
    cookies().set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + SESSION_EXPIRATION),
      sameSite: "lax",
      path: "/",
    });

    revalidatePath("/profile");

    return {
      message: "Your information has been updated",
      status: "success",
      code: 202,
    };
  } catch (error) {
    return {
      message: "Server Error! Try again later",
      status: "failed",
      code: 500,
    };
  }
};
