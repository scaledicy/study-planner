import React from 'react'
import LessonForm from 'containers/Dashboard/Lessons/LessonForm/LessonForm'
import { useSelector } from 'react-redux'
import { isLessonFormStatusSelector } from 'store/lessons/selector'

const LessonCreate: React.FC = () => {
  const status = useSelector(isLessonFormStatusSelector)

  return status || typeof status === 'number' ? <LessonForm /> : null
}

export default LessonCreate
