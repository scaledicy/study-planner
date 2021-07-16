import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { useCallback, useEffect } from 'react'
import { fetchLessons } from 'store/lessons/thunk'
import { toggleLessonForm } from 'store/lessons/action'

const useLessonsList = () => {
  const dispatch = useDispatch()

  //==== Selectors ====
  const dataState = useSelector((state: AppStore) => ({
    lessons: state.lessons.lessons,
    isLessonForm: state.lessons.isLessonForm,
  }))

  //==== Dispatch handlers ====
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )
  const toggleLessonFormHandler = useCallback(
    () => dispatch(toggleLessonForm(!dataState.isLessonForm)),
    [dispatch, dataState.isLessonForm]
  )

  //==== Effects ====
  useEffect(() => {
    getLessonsHandler()
  }, [getLessonsHandler])

  return {
    data: {
      lessons: dataState.lessons,
      isLessonForm: dataState.isLessonForm,
    },
    handlers: {
      toggleLessonFormHandler,
    },
  }
}

export default useLessonsList
