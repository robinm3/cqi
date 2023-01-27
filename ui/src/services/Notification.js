import { api } from "./api";
import Cookies from "js-cookie";

export const getNotifications = async () => {
  const token = Cookies.get("token");

  const response = await api.get("notifications",{
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
  }).then((response) => {
    return response.data;
  });
  
  return response.message;
};

export default getNotifications;
