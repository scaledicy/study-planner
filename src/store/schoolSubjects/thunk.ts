import { setSchoolSubjects } from './action'
import { ThunkAction } from 'redux-thunk'
import { AppStore } from 'store/store'
import { getSchoolSubjects } from 'services/schoolSubjects/schoolSubjects'

export const fetchLessons =
  (): ThunkAction<Promise<void>, AppStore, unknown, any> => async dispatch => {
    const response = await getSchoolSubjects()
    dispatch(setSchoolSubjects(response.data))
  }
