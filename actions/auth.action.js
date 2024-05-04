"use server";

// next
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// utils
import connectDB from "@/utils/connectDB";
import { hashPassword, verifyPassword } from "@/utils/functions";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// models
import { User } from "@/utils/models/user";
// jwt
import { sign } from "jsonwebtoken";

export const createUser = async (data) => {
  try {
    await connectDB();
    const { username, password } = data;

    const existingUser = await User.findOne({ username });

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

export const loginUser = async (data) => {
  try {
    await connectDB();
    const { username, password } = data;

    const user = await User.findOne({ username });

    if (!user) {
      return {
        message: "Username or password is In-Correct!",
        status: "failed",
        code: 404,
      };
    }

    // verify password
    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return {
        message: "Username or password is In-Correct!",
        status: "failed",
        code: 422,
      };
    }

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

    return {
      message: "Logged In Successfully!",
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

export const signOut = () => {
  cookies().delete("accessToken");
  redirect("/");
};
