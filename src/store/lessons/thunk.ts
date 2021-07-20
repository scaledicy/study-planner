import {
  createLesson,
  getLessons,
  updateLesson,
} from 'services/lessons/lessons'
import { setLessons } from './action'
import { ThunkAction } from 'redux-thunk'
import { AppStore } from 'store/store'
import { LessonRequest } from 'services/lessons/type'

export const fetchLessons =
  (): ThunkAction<Promise<void>, AppStore, unknown, any> => async dispatch => {
    const response = await getLessons()
    dispatch(setLessons(response.data))
  }

export const createLessonThunk =
  (lesson: LessonRequest): ThunkAction<Promise<void>, AppStore, unknown, any> =>
  async dispatch => {
    const response = await createLesson(lesson)
    if (response.status === 200) {
      await dispatch(fetchLessons())
    }
  }

export const updateLessonThunk =
  (
    id: number,
    lesson: LessonRequest
  ): ThunkAction<Promise<void>, AppStore, unknown, any> =>
  async dispatch => {
    const response = await updateLesson(id, lesson)
    if (response.status === 200) {
      await dispatch(fetchLessons())
    }
  }
