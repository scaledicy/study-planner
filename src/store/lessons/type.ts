import { Lesson } from 'services/lessons/type'
import { SELECT_DAYS } from 'shared/const'

export type LessonsState = {
  lessons: Lesson[]
  isLessonForm: boolean
  filterDay: typeof SELECT_DAYS[number] | null
}
