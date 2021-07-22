import {
  CLOSE_LESSON_FORM,
  CREATE_LESSON_FORM,
  EDIT_LESSON_FORM,
  SET_FILTER_DAY,
  SET_FORM_INPUT_DATA,
  SET_LESSONS,
} from './reducer'
import { Lesson } from 'services/lessons/type'
import { SELECT_DAYS } from 'shared/const'
import { LessonFormType } from './type'

type SetLessonsActionType = {
  type: typeof SET_LESSONS
  lessons: Array<Lesson>
}

type AddLessonActionType = {
  type: typeof CREATE_LESSON_FORM
}

type EditLessonActionType = {
  type: typeof EDIT_LESSON_FORM
  id: number
  lessonForm: LessonFormType
}

type CloseLessonFormActionType = {
  type: typeof CLOSE_LESSON_FORM
}

type SetFilterDayActionType = {
  type: typeof SET_FILTER_DAY
  filterDay: typeof SELECT_DAYS[number] | null
}

type SetFormInputDataActionType = {
  type: typeof SET_FORM_INPUT_DATA
  lessonForm: LessonFormType
}

export const setLessons = (lessons: Array<Lesson>): SetLessonsActionType => ({
  type: SET_LESSONS,
  lessons,
})

export const createLessonForm = (): AddLessonActionType => ({
  type: CREATE_LESSON_FORM,
})

export const editLessonForm = (
  id: number,
  lessonForm: LessonFormType
): EditLessonActionType => ({
  type: EDIT_LESSON_FORM,
  id,
  lessonForm,
})

export const setFilterDay = (
  filterDay: typeof SELECT_DAYS[number] | null
): SetFilterDayActionType => ({
  type: SET_FILTER_DAY,
  filterDay,
})

export const setFormInputData = (
  lessonForm: LessonFormType
): SetFormInputDataActionType => ({
  type: SET_FORM_INPUT_DATA,
  lessonForm,
})

export const closeLessonsFormData = (): CloseLessonFormActionType => ({
  type: CLOSE_LESSON_FORM,
})
