import api from "@/configs/api";

export const getSession = () => {
  return api.get("/api/auth").then((res) => res.data);
};

export const getUser = () => {
  return api.get("/api/user").then((res) => res.data);
};
