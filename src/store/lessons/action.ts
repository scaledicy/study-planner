import { SET_LESSONS } from './reducer'
import { Lesson } from 'services/lessons/type'

type SetUsersActionType = {
  type: typeof SET_LESSONS
  lessons: Array<Lesson>
}

export const setLessons = (lessons: Array<Lesson>): SetUsersActionType => ({
  type: SET_LESSONS,
  lessons,
})
