import { instance } from 'services/instance'
import { Lesson, LessonRequest } from './type'

export const getLessons = () => instance.get<Lesson[]>('lessons')

export const createLesson = (lesson: LessonRequest) =>
  instance.post('lessons', lesson)
