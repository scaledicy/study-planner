import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { isLessonFormStatusSelector } from 'store/lessons/selector'
import React, { useCallback, useEffect } from 'react'
import { DAYS } from 'shared/const'
import { setFilterDay } from 'store/lessons/action'
import { fetchSchoolSubjects } from 'store/schoolSubjects/thunk'

const useLessons = () => {
  const dispatch = useDispatch()

  //==== Global state ====
  const filterDay = useSelector((state: AppStore) => state.lessons.filterDay)
  const status = useSelector(isLessonFormStatusSelector)

  //==== Handlers ====
  const handleFilterDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value: typeof DAYS[number] | null =
      event.target.value === ''
        ? null
        : (event.target.value as typeof DAYS[number])
    getLessonsHandler(value)
  }
  const getLessonsHandler = useCallback(
    (day: typeof DAYS[number] | null) => dispatch(setFilterDay(day)),
    [dispatch]
  )
  const getSchoolSubjectsHandler = useCallback(() => {
    dispatch(fetchSchoolSubjects())
  }, [dispatch])

  //==== Effects ====
  useEffect(() => {
    getSchoolSubjectsHandler()
  }, [getSchoolSubjectsHandler])

  return {
    data: {
      filterDay,
      status,
    },
    handlers: {
      getSchoolSubjectsHandler,
      handleFilterDay,
    },
  }
}

export default useLessons
