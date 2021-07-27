import { initialState } from './state'
import { LessonsState } from './type'

export const SET_LESSONS = 'SET_LESSONS'
export const SET_FILTER_DAY = 'SET_FILTER_DAY'
export const SET_FORM_INPUT_DATA = 'SET_FORM_INPUT_DATA'
export const CREATE_LESSON_FORM = 'ADD_LESSON_FORM'
export const EDIT_LESSON_FORM = 'EDIT_LESSON_FORM'
export const CLOSE_LESSON_FORM = 'CLOSE_LESSON_FORM'

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
    case SET_FILTER_DAY: {
      return {
        ...state,
        filterDay: action.filterDay,
      }
    }
    case SET_FORM_INPUT_DATA: {
      return {
        ...state,
        lessonForm: action.lessonForm,
      }
    }
    case CREATE_LESSON_FORM: {
      return {
        ...state,
        isFormStatus: true,
      }
    }

    case EDIT_LESSON_FORM: {
      return {
        ...state,
        isFormStatus: action.id,
        lessonForm: action.lessonForm,
      }
    }
    case CLOSE_LESSON_FORM:
      return {
        ...state,
        isFormStatus: false,
        lessonForm: {
          day: null,
          schoolSubject: null,
          numberOfLesson: null,
        },
      }
    default:
      return state
  }
}
