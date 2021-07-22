import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { LESSON_TIME, DAYS } from 'shared/const'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'
import useLessonForm from './useLessonForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createLesson: {
      marginTop: theme.spacing(2),
    },
    formContainer: {
      position: 'relative',
    },
    closeForm: {
      position: 'absolute',
      top: '-20px',
      right: '-20px',
    },
  })
)

//todo move logic out of a component

const LessonForm: React.FC = () => {
  const classes = useStyles()
  const { data, handlers } = useLessonForm()

  let statusTextBtn =
    typeof data.status === 'number' ? 'Edit lesson' : 'Create lesson'

  return (
    <div className={classes.formContainer}>
      <Card>
        <CardContent>
          <form noValidate autoComplete='off' onSubmit={handlers.handleSubmit}>
            <FormControl
              variant='outlined'
              size='small'
              fullWidth
              margin='dense'
            >
              <InputLabel id='day-label'>Choose day</InputLabel>
              <Select
                labelId='day-label'
                value={data.lessonFormData.day ?? ''}
                onChange={handlers.handleChangeDay}
                label='Choose day'
              >
                {DAYS.map(d => (
                  <MenuItem key={d} value={d}>
                    {d}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              fullWidth
              margin='dense'
            >
              <InputLabel id='choose-school-subject'>
                Choose school subject
              </InputLabel>
              <Select
                labelId='choose-school-subject'
                value={data.lessonFormData.schoolSubject ?? ''}
                onChange={handlers.handleChangeSubject}
                label='Choose school subject'
              >
                {data.schoolSubjectsData.map(s => (
                  <MenuItem key={s.id} value={s.id}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              fullWidth
              margin='dense'
            >
              <InputLabel id='count-of-lesson'>Count of lesson</InputLabel>
              <Select
                labelId='count-of-lesson'
                value={data.lessonFormData.numberOfLesson ?? ''}
                onChange={handlers.handleChangeNumberOfLesson}
                label='Count of lesson'
              >
                {LESSON_TIME.map((el, i) => (
                  <MenuItem key={el.start} value={i}>
                    Lesson {++i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant='contained'
              color='primary'
              className={classes.createLesson}
              type='submit'
            >
              {statusTextBtn}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Fab
        onClick={handlers.handleClose}
        size='small'
        color='primary'
        aria-label='add'
        className={classes.closeForm}
      >
        <CloseIcon />
      </Fab>
    </div>
  )
}

export default LessonForm
