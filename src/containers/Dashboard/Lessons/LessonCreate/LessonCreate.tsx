import React from 'react'
import LessonForm from 'containers/Dashboard/Lessons/LessonForm/LessonForm'
import { useSelector } from 'react-redux'
import { AppStore } from 'store/store'

const LessonCreate: React.FC = () => {
  const isLessonForm = useSelector(
    (state: AppStore) => state.lessons.isLessonForm
  )

  return isLessonForm ? <LessonForm /> : null
}

export default LessonCreate
