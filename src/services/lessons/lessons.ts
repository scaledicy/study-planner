import axios from 'axios'
import { Lesson } from './type'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
})

export const getLessons = () => {
  return instance.get<Lesson[]>('lessons')
}
