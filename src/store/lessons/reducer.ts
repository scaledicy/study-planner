import { initialState } from './state'
import { LessonsState } from './type'

export const SET_LESSONS = 'SET_LESSONS'

export const lessonsReducer = (
  state = initialState,
  action: any
): LessonsState => {
  switch (action.type) {
    case SET_LESSONS: {
      return [...action.lessons]
    }
    default:
      return state
  }
}
