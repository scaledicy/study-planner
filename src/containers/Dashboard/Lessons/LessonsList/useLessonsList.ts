import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { deleteLessonThunk, fetchLessons } from 'store/lessons/thunk'
import {
  getLessonsByDayFilterSelector,
  isCreateFormSelector,
  isEditFormSelector,
} from 'store/lessons/selector'
import { Lesson } from 'services/lessons/type'
import { lessonToForm } from 'helpers/lessonHelpers'
import {
  createLessonForm,
  editLessonForm,
  setFormInputData,
} from 'store/lessons/action'

const useLessonsList = () => {
  const dispatch = useDispatch()

  //==== Selectors ====
  const lessons = useSelector(getLessonsByDayFilterSelector)
  let isCreateForm = useSelector(isCreateFormSelector)
  let isEditForm = useSelector(isEditFormSelector)

  //==== Dispatch handlers ====
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )
  const createLessonFormHandler = useCallback(
    () => dispatch(createLessonForm(!isCreateForm)),
    [dispatch, isCreateForm]
  )
  const deleteLessonFormHandler = useCallback(
    lessonId => dispatch(deleteLessonThunk(lessonId)),
    [dispatch]
  )

  const editLessonHandler = useCallback(
    (id: number, lesson: Lesson, isEdit: boolean) => {
      // dispatch(updateLessonThunk(id, lessonToRequest(lesson)))

      dispatch(setFormInputData(lessonToForm(lesson)))
      dispatch(editLessonForm(isEdit))
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
      isCreateForm,
      isEditForm,
    },
    handlers: {
      createLessonFormHandler,
      editLessonHandler,
      deleteLessonFormHandler,
    },
  }
}

export default useLessonsList
