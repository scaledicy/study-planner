import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { fetchLessons } from 'store/lessons/thunk'
import { toggleLessonForm } from 'store/lessons/action'
import {
  getIsLessonFormSelector,
  getLessonsByDayFilterSelector,
} from 'store/lessons/selector'

const useLessonsList = () => {
  const dispatch = useDispatch()

  //==== Selectors ====
  const isLessonForm = useSelector(getIsLessonFormSelector)
  const lessons = useSelector(getLessonsByDayFilterSelector)

  //==== Dispatch handlers ====
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )
  const toggleLessonFormHandler = useCallback(
    () => dispatch(toggleLessonForm(!isLessonForm)),
    [dispatch, isLessonForm]
  )

  //==== Effects ====
  useEffect(() => {
    getLessonsHandler()
  }, [getLessonsHandler])

  return {
    data: {
      lessons,
      isLessonForm: isLessonForm,
    },
    handlers: {
      toggleLessonFormHandler,
    },
  }
}

export default useLessonsList
