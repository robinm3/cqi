import { api } from './api'
import Cookies from 'js-cookie'

export const getTasks = async () => {
  const token = Cookies.get('token')
  const response = await api
    .get('/task', {
      headers: {
        authorization: token,
      },
    })
    .then((data) => {
      // console.log(data.data)
      return data.data
    })
  return response.message
}
