import { useDispatch, useSelector } from 'react-redux'
import { isLessonFormStatusSelector } from 'store/lessons/selector'
import { AppStore } from 'store/store'
import { LessonFormType } from 'store/lessons/type'
import React from 'react'
import { closeLessonsFormData, setFormInputData } from 'store/lessons/action'
import { LESSON_TIME, DAYS } from 'shared/const'
import { LessonRequest } from 'services/lessons/type'
import { createLessonThunk, updateLessonThunk } from 'store/lessons/thunk'

const useLessonFormModal = () => {
  const dispatch = useDispatch()
  const status = useSelector(isLessonFormStatusSelector)
  let statusTextBtn =
    typeof status === 'number' ? 'Edit lesson' : 'Create lesson'

  //==== Global state ====
  const schoolSubjectsData = useSelector(
    (state: AppStore) => state.schoolSubjects
  )
  const lessonFormData: LessonFormType = useSelector((state: AppStore) => ({
    day: state.lessons.lessonForm.day,
    schoolSubject: state.lessons.lessonForm.schoolSubject,
    numberOfLesson: state.lessons.lessonForm.numberOfLesson,
  }))

  //==== Handlers ====
  const handleChangeDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(
      setFormInputData({
        ...lessonFormData,
        day: event.target.value as typeof DAYS[number] | null,
      })
    )
  }
  const handleChangeSubject = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(
      setFormInputData({
        ...lessonFormData,
        schoolSubject: event.target.value as string | null,
      })
    )
  }
  const handleChangeNumberOfLesson = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(
      setFormInputData({
        ...lessonFormData,
        numberOfLesson: parseInt(event.target.value as string),
      })
    )
  }

  const handleClose = () => {
    dispatch(closeLessonsFormData())
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //todo To thunk action
    if (
      //==== Form validation ====
      lessonFormData.day !== null &&
      lessonFormData.numberOfLesson !== null &&
      lessonFormData.schoolSubject !== null
    ) {
      const objSubmit: LessonRequest = {
        day: lessonFormData.day,
        school_subject: lessonFormData.schoolSubject,
        ...LESSON_TIME[lessonFormData.numberOfLesson],
      }
      if (status && typeof status === 'boolean') {
        dispatch(createLessonThunk(objSubmit))
        handleClose()
      }
      if (typeof status === 'number') {
        dispatch(updateLessonThunk(status, objSubmit))
        handleClose()
      }
    }
  }

  return {
    data: {
      schoolSubjectsData,
      lessonFormData,
      status,
      statusTextBtn,
    },
    handlers: {
      handleChangeDay,
      handleChangeSubject,
      handleChangeNumberOfLesson,
      handleSubmit,
      handleClose,
    },
  }
}

export default useLessonFormModal
