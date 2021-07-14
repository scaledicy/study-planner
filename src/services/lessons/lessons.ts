import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
})

export const getLessons = () => {
  return instance.get('lessons')
}
