import { instance } from 'services/instance'
import { Lesson, LessonRequest } from './type'

//==== Get ====
export const getLessons = () => instance.get<Lesson[]>('lessons')

//==== Post ====
export const createLesson = (lesson: LessonRequest) =>
  instance.post('lessons', lesson)

//==== Put ====
export const updateLesson = (id: number, lesson: LessonRequest) =>
  instance.put(`lessons/${id}`, lesson)

//==== Delete ====
export const deleteLesson = (id: number) => instance.delete(`lessons/${id}`)
