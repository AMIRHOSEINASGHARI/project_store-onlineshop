// next
import { NextResponse } from "next/server";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Products } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export async function GET() {
  try {
    await connectDB();
    const session = getServerSession();

    // checking session validation
    if (!session) {
      return NextResponse.json({
        cart: null,
        message: "No Data! Un-Authorized",
        status: "success",
        code: 200,
      });
    }

    const cart = await User.findById(session?.userId).select("cart").populate({
      path: "cart.items.productId",
      model: Products,
    });

    // checking user existancy
    if (!cart) {
      return NextResponse.json(
        {
          message: "User not found!",
          status: "failed",
          code: 404,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      cart: cart.cart,
      message: "Fetched!",
      status: "success",
      code: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server Error!",
        status: "failed",
        code: 500,
      },
      {
        status: 500,
      }
    );
  }
}
