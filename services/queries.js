import api from "@/configs/api";

export const getSession = () => {
  return api.get("/api/auth").then((res) => res.data);
};
