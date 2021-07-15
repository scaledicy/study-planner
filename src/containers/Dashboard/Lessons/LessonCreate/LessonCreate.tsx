import Button from '@material-ui/core/Button/Button'
import React from 'react'
import LessonForm from '../LessonForm/LessonForm'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createNewLesson: {
      marginBottom: theme.spacing(2),
    },
  })
)

const LessonCreate: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        className={classes.createNewLesson}
      >
        Add new lesson
      </Button>

      <LessonForm />
    </>
  )
}

export default LessonCreate
