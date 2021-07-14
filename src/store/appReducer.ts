import { combineReducers } from 'redux'
import { lessonsReducer } from './lessons/reducer'

export const appReducer = combineReducers({
  lessons: lessonsReducer,
})
