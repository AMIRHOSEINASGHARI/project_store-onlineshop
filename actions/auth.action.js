"use server";

import connectDB from "@/utils/connectDB";
import { User } from "@/utils/models/user";
import { hashPassword } from "@/utils/functions";

export const createUser = async (data) => {
  try {
    await connectDB();
    const { username, password } = data;

    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return {
        message: "Username already Exists!",
        status: "failed",
        code: 422,
      };
    }

    const hashedPassword = await hashPassword(password);

    await User.create({ username, password: hashedPassword });
    return {
      message: "Signed Up successfully!",
      status: "success",
      code: 200,
    };
  } catch (error) {
    return {
      message: "Server Error! Try again later",
      status: "failed",
      code: 500,
    };
  }
};
