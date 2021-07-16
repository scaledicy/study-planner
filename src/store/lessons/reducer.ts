import { initialState } from './state'
import { LessonsState } from './type'

export const SET_LESSONS = 'SET_LESSONS'
export const TOGGLE_LESSON_FORM = 'TOGGLE_LESSON_FORM'

export const lessonsReducer = (
  state = initialState,
  action: any
): LessonsState => {
  switch (action.type) {
    case SET_LESSONS: {
      return {
        ...state,
        lessons: [...action.lessons],
      }
    }
    case TOGGLE_LESSON_FORM: {
      return {
        ...state,
        isLessonForm: action.isLessonForm,
      }
    }
    default:
      return state
  }
}
