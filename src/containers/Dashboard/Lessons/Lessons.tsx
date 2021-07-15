import LessonsList from './LessonsList/LessonsList'
import LessonCreate from './LessonCreate/LessonCreate'
import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'

const Lessons: React.FC = () => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item xs={2}>
        <LessonsList />
      </Grid>
      <Grid item xs={6}>
        <LessonCreate />
      </Grid>
    </Grid>
  )
}

export default Lessons
