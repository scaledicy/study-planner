import { Lesson } from 'services/lessons/type'
import { SELECT_DAYS } from 'shared/const'

export type LessonsState = {
  lessons: Lesson[]
  filterDay: typeof SELECT_DAYS[number] | null
  lessonForm: LessonFormType
  isCreateForm: boolean
  isEditForm: boolean
  isFormStatus: boolean | number
}

export type LessonFormType = {
  day: typeof SELECT_DAYS[number] | null
  schoolSubject: string | null
  numberOfLesson: number | null
}
