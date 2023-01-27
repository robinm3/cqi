import { api } from './api'
import Cookies from 'js-cookie'

export const postProblem = async (name, description, type) => {
  const token = Cookies.get('token')

  const userResponse = await api
    .post(
      'problem',
      JSON.stringify({
        name,
        description,
        type,
      }),
      {
        headers: {
          'content-type': 'application/json',
          authorization: token,
        },
      }
    )
    .then((response) => {
      return response.data
    })
  return userResponse
}

export const postLostItem = async (name, description, lostTime, email) => {
  const token = Cookies.get('token')

  const userResponse = await api
    .post(
      'lostItem',
      JSON.stringify({
        name,
        description,
        lostTime,
        email,
      }),
      {
        headers: {
          'content-type': 'application/json',
          authorization: token,
        },
      }
    )
    .then((response) => {
      return response.data
    })
  return userResponse
}

export const postFoundItem = async (name, description, foundTime) => {
  const token = Cookies.get('token')

  const userResponse = await api
    .post(
      'foundItem',
      JSON.stringify({
        name,
        description,
        foundTime,
      }),
      {
        headers: {
          'content-type': 'application/json',
          authorization: token,
        },
      }
    )
    .then((response) => {
      return response.data
    })
  return userResponse
}
