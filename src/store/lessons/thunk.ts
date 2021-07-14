import { getLessons } from 'services/lessons/lessons'
import { setLessons } from './action'
import { ThunkAction } from 'redux-thunk'
import { AppStore } from 'store/store'

export const fetchLessons =
  (): ThunkAction<Promise<void>, AppStore, unknown, any> => async dispatch => {
    let response = await getLessons()
    dispatch(setLessons(response.data))
  }
