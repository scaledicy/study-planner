import LessonsList from './LessonsList/LessonsList'
import LessonCreate from './LessonCreate/LessonCreate'
import React from 'react'

const Lessons: React.FC = () => {
  return (
    <>
      <LessonsList />
      <LessonCreate />
    </>
  )
}

export default Lessons
