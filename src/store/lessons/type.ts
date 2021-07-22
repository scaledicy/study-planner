import { Lesson } from 'services/lessons/type'
import { DAYS } from 'shared/const'

export type LessonsState = {
  lessons: Lesson[]
  filterDay: typeof DAYS[number] | null
  lessonForm: LessonFormType
  isCreateForm: boolean
  isEditForm: boolean
  isFormStatus: boolean | number
}

export type LessonFormType = {
  day: typeof DAYS[number] | null
  schoolSubject: string | null
  numberOfLesson: number | null
}
