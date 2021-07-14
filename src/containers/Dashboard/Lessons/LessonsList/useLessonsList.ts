import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { useCallback, useEffect } from 'react'
import { fetchLessons } from 'store/lessons/thunk'

const useLessonsList = () => {
  const dispatch = useDispatch()

  //==== Selectors ====
  const lessons = useSelector((state: AppStore) => state.lessons)

  //==== Dispatch handlers ====
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )

  //==== Effects ====
  useEffect(() => {
    getLessonsHandler()
  }, [getLessonsHandler])

  return {
    data: {
      lessons,
    },
  }
}

export default useLessonsList
