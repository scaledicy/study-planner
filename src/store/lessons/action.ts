import { SET_FILTER_DAY, SET_LESSONS, TOGGLE_LESSON_FORM } from './reducer'
import { Lesson } from 'services/lessons/type'
import { SELECT_DAYS } from 'shared/const'

type SetLessonsActionType = {
  type: typeof SET_LESSONS
  lessons: Array<Lesson>
}
type ToggleLessonActionType = {
  type: typeof TOGGLE_LESSON_FORM
  isLessonForm: boolean
}

type SetFilterDayActionType = {
  type: typeof SET_FILTER_DAY
  filterDay: typeof SELECT_DAYS[number] | null
}

export const setLessons = (lessons: Array<Lesson>): SetLessonsActionType => ({
  type: SET_LESSONS,
  lessons,
})

export const toggleLessonForm = (
  isLessonForm: boolean
): ToggleLessonActionType => ({
  type: TOGGLE_LESSON_FORM,
  isLessonForm,
})

export const setFilterDay = (
  filterDay: typeof SELECT_DAYS[number] | null
): SetFilterDayActionType => ({
  type: SET_FILTER_DAY,
  filterDay,
})
