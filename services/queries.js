import api from "@/configs/api";

export const getSession = () => {
  return api.get("/api/auth").then((res) => res.data);
};

export const getUserData = () => {
  return api.get("/api/user/data").then((res) => res.data);
};

export const getUserCart = () => {
  return api.get("/api/user/cart").then((res) => res.data);
};
