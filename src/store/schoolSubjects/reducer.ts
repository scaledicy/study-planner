import { initialState } from './state'
import { SchoolSubjectsState } from './type'

export const SET_SCHOOL_SUBJECTS = 'SET_SCHOOL_SUBJECTS'

export const schoolSubjectsReducer = (
  state = initialState,
  action: any
): SchoolSubjectsState => {
  switch (action.type) {
    case SET_SCHOOL_SUBJECTS: {
      return [...action.schoolSubjects]
    }
    default:
      return state
  }
}
