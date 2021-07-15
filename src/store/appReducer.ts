import { combineReducers } from 'redux'
import { lessonsReducer } from './lessons/reducer'
import { schoolSubjectsReducer } from './schoolSubjects/reducer'

export const appReducer = combineReducers({
  lessons: lessonsReducer,
  schoolSubjects: schoolSubjectsReducer,
})
