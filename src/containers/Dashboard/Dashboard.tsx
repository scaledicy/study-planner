import React, { useCallback } from 'react'
import BaseLayout from 'components/BaseLayout/BaseLayout'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessons } from 'store/lessons/thunk'
import { AppStore } from 'store/store'

const Dashboard: React.FC = () => {
  const dispatch = useDispatch()

  const lessons = useSelector((state: AppStore) => state.lessons)

  //Dispatch handlers
  const getLessonsHandler = useCallback(
    () => dispatch(fetchLessons()),
    [dispatch]
  )

  return (
    <BaseLayout>
      <h1>Dashboard component</h1>
      <Button variant='contained' color='primary' onClick={getLessonsHandler}>
        Get lessons
      </Button>
      <div>
        {lessons.map(l => (
          <div key={l.id}>{l.school_subject.name}</div>
        ))}
      </div>
    </BaseLayout>
  )
}

export default Dashboard
