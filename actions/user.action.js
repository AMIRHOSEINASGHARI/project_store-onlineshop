"use server";

import connectDB from "@/utils/connectDB";
import { Comments } from "@/utils/models/comment";
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";
import { cookies } from "next/headers";

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
      .select("-password -cart")
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

    cookies().delete("accessToken");

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
