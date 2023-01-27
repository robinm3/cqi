import { api } from './api'

export const getTasks = async () => {
  const response = await api.get('task').then((data) => {
    return data.data
  })
  return response.message
}
