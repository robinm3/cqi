import Cookies from "js-cookie";
import { api } from "./api";

export const signUp = async (email, password) => {
  const userResponse = await api
    .post(
      "user",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    });
  return userResponse;
};

export const login = async (email, password) => {
  const userResponse = await api
    .post(
      "user:login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    });
  Cookies.set("token", userResponse.token);
  return userResponse;
};

export const logout = async () => {
  const token = Cookies.get("token");
  await api
    .post("user:logout", {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return response.data;
    });
  Cookies.set("token", undefined);
};

export const getUser = async () => {
  const token = Cookies.get("token");
  if (token && token !== "{}" && token !== "undefined") {
    const userResponse = await api
      .get("user:me", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return userResponse;
  }
  return undefined;
};
