import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { deleteLessonThunk, fetchLessons } from 'store/lessons/thunk'
import { getLessonsByDayFilterSelector } from 'store/lessons/selector'
import { Lesson } from 'services/lessons/type'
import { lessonToForm } from 'helpers/lessonHelpers'
import { createLessonForm, editLessonForm } from 'store/lessons/action'

const useLessonsList = () => {
  const dispatch = useDispatch()

  //==== Global state ====
  const lessons = useSelector(getLessonsByDayFilterSelector)

  //==== Handlers ====
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )
  const createLessonFormHandler = useCallback(
    () => dispatch(createLessonForm()),
    [dispatch]
  )
  const deleteLessonFormHandler = useCallback(
    lessonId => dispatch(deleteLessonThunk(lessonId)),
    [dispatch]
  )
  const editLessonHandler = useCallback(
    (id: number, lesson: Lesson) => {
      dispatch(editLessonForm(id, lessonToForm(lesson)))
    },
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
    handlers: {
      createLessonFormHandler,
      editLessonHandler,
      deleteLessonFormHandler,
    },
  }
}

export default useLessonsList
