import Cookies from "js-cookie";
import { api } from "./api";

export const signUp = async (email, firstName, lastName, type) => {
  const userResponse = await api
    .post(
      "user",
      {
        email,
        type,
        firstName,
        lastName,
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

export const updatePassword = async (newPassword) => {
  const token = Cookies.get("token");
  const userResponse = await api
    .put(
      "user",
      {
        newPassword,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: token,
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
  Cookies.set("token", userResponse, { secure: false });
  return userResponse;
};

export const logout = async () => {
  Cookies.set("token", undefined);
};

export const getUser = async () => {
  const token = Cookies.get("token");
  console.log("token:" + token);
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
