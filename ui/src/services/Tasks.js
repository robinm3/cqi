import { api } from "./api";
import Cookies from "js-cookie";

export const createTask = async (
  name,
  description,
  startTime,
  endTime,
  volunteerId
) => {
  const token = Cookies.get("token");
  const taskResponse = await api
    .post(
      "task",
      JSON.stringify({
        name,
        description,
        startTime,
        endTime,
        volunteerId,
      }),
      {
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      }
    )
    .then((response) => {
      return JSON.parse(response.data);
    })
    .catch((error) => {});
  return taskResponse;
};

export const getUsers = async () => {
  const token = Cookies.get("token");
  const taskResponse = await api
    .get("user", {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return JSON.parse(response.data);
    })
    .catch((error) => {});
  return taskResponse;
};

export const getTasks = async () => {
  const token = Cookies.get("token");
  const taskResponse = await api
    .get("task", {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
  return taskResponse;
};

export const deleteTask = async (taskId) => {
  const token = Cookies.get("token");
  const taskResponse = await api
    .delete("task/" + taskId, {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return JSON.parse(response.data);
    })
    .catch((error) => {});
  return taskResponse;
};

export const putTask = async (
  name,
  description,
  startTime,
  endTime,
  volunteerId
) => {
  const token = Cookies.get("token");
  const taskResponse = await api
    .put(
      "task",
      JSON.stringify({
        name,
        description,
        startTime,
        endTime,
        volunteerId,
      }),
      {
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
      }
    )
    .then((response) => {
      return JSON.parse(response.data);
    })
    .catch((error) => {});
  return taskResponse;
};
