import { SET_LESSONS, TOGGLE_LESSON_FORM } from './reducer'
import { Lesson } from 'services/lessons/type'

type SetLessonsActionType = {
  type: typeof SET_LESSONS
  lessons: Array<Lesson>
}
type ToggleLessonActionType = {
  type: typeof TOGGLE_LESSON_FORM
  isLessonForm: boolean
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
