import { api } from './api'
import Cookies from 'js-cookie'

export const getLostItem = async () => {
  const token = Cookies.get('token')
  const taskResponse = await api
    .get('lostItem', {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {})
  return taskResponse
}

export const getFoundItem = async () => {
  const token = Cookies.get('token')
  const taskResponse = await api
    .get('foundItem', {
      headers: {
        authorization: token,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {})
  return taskResponse
}
