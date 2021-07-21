import React from 'react'
import LessonForm from 'containers/Dashboard/Lessons/LessonForm/LessonForm'
import { useSelector } from 'react-redux'
import {
  isCreateFormSelector,
  isEditFormSelector,
} from 'store/lessons/selector'

const LessonCreate: React.FC = () => {
  const isCreateForm = useSelector(isCreateFormSelector)
  const isEditForm = useSelector(isEditFormSelector)

  return (
    <>
      {isCreateForm ? <LessonForm /> : null}
      {isEditForm ? <LessonForm /> : null}
    </>
  )
}

export default LessonCreate
