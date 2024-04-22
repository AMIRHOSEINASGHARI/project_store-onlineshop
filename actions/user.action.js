"use server";

import connectDB from "@/utils/connectDB";
import { Comments } from "@/utils/models/comment";
import { User } from "@/utils/models/user";
import { getServerSession } from "@/utils/session";

// Gets last 4 Products Published
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
