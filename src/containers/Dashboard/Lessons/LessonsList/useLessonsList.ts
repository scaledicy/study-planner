import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { fetchLessons, updateLessonThunk } from 'store/lessons/thunk'
import { toggleLessonForm } from 'store/lessons/action'
import {
  getIsLessonFormSelector,
  getLessonsByDayFilterSelector,
} from 'store/lessons/selector'
import { Lesson } from 'services/lessons/type'
import lessonToRequest from 'helpers/lessonToRequest'

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
  const updateLessonHandler = useCallback(
    (id: number, lesson: Lesson) =>
      dispatch(updateLessonThunk(id, lessonToRequest(lesson))),
    [dispatch]
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
      updateLessonHandler,
    },
  }
}

export default useLessonsList
