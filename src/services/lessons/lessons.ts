import { instance } from 'services/instance'
import { Lesson } from './type'

export const getLessons = () => instance.get<Lesson[]>('lessons')
