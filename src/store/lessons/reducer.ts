import { initialState } from './state'
import { LessonsState } from './type'

export const SET_LESSONS = 'SET_LESSONS'
export const TOGGLE_LESSON_FORM = 'TOGGLE_LESSON_FORM'
export const SET_FILTER_DAY = 'SET_FILTER_DAY'

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
    case SET_FILTER_DAY: {
      return {
        ...state,
        filterDay: action.filterDay,
      }
    }
    default:
      return state
  }
}
