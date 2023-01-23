import { api } from "./api";

export const pingBackend = async () => {
  const response = await api.get("ping").then((data) => {
    return data.data;
  });
  return response.message;
};
