// next
import { cookies } from "next/headers";
// jwt
import { verify } from "jsonwebtoken";
// vars
import { SECRET_KEY } from "./vars";

export const getServerSession = () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken").value;

    const session = verify(accessToken, SECRET_KEY);

    return session;
  } catch (error) {
    return null;
  }
};
