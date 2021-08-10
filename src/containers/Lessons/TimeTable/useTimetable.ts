import { useDispatch, useSelector } from 'react-redux'
import { getLessonsByTimetableSelector } from 'store/lessons/selector'
import { useCallback } from 'react'
import { Lesson } from 'services/lessons/type'
import {
  createLessonForm,
  editLessonForm,
  setFormInputData,
} from 'store/lessons/action'
import { lessonToForm } from 'helpers/lessonHelpers'
import { LessonFormType } from 'store/lessons/type'

const useTimetable = () => {
  const dispatch = useDispatch()
  const timetableLessons = useSelector(getLessonsByTimetableSelector)

  const createLessonFormHandler = useCallback(
    (lessonForm: LessonFormType) => {
      dispatch(setFormInputData(lessonForm))

      dispatch(createLessonForm())
    },
    [dispatch]
  )
  const editLessonHandler = useCallback(
    (lesson: Lesson) => {
      dispatch(editLessonForm(lesson.id, lessonToForm(lesson)))
    },
    [dispatch]
  )
  const handleClickCell = (lesson: Lesson, lessonForm: LessonFormType) => {
    if (lesson) {
      editLessonHandler(lesson)
    } else {
      createLessonFormHandler(lessonForm)
    }
  }

  return {
    data: {
      timetableLessons,
    },
    handlers: {
      handleClickCell,
    },
  }
}

export default useTimetable
