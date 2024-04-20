import { NextResponse } from "next/server";
import { getServerSession } from "@/utils/session";

export async function GET() {
  try {
    const session = getServerSession();

    if (session) {
      return NextResponse.json(
        { session, message: "You are authorized" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { session: null, message: "Error! You are un-authorized!" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Server Error!" }, { status: 500 });
  }
}
