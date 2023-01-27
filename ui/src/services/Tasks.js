import { api } from "./api";

export const createTask = async (
  token,
  name,
  description,
  startTime,
  endTime,
  volunteerId
) => {
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

export const getUsers = async (token) => {
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
  const taskResponse = await api
    .get("task", {
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

export const deleteTask = async (taskId) => {
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
  token,
  name,
  description,
  startTime,
  endTime,
  volunteerId
) => {
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
