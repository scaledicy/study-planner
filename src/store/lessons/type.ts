import { Lesson } from 'services/lessons/type'

export type LessonsState = {
  lessons: Lesson[]
  isLessonForm: boolean
}
