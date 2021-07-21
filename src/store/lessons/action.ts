import {
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
  isCreateForm: boolean
}

type EditLessonActionType = {
  type: typeof EDIT_LESSON_FORM
  isEditForm: boolean
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

export const createLessonForm = (
  isCreateForm: boolean
): AddLessonActionType => ({
  type: CREATE_LESSON_FORM,
  isCreateForm,
})

export const editLessonForm = (isEditForm: boolean): EditLessonActionType => ({
  type: EDIT_LESSON_FORM,
  isEditForm,
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
