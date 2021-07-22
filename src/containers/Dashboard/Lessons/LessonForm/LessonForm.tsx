import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { LessonRequest } from 'services/lessons/type'
import { LESSON_TIME, SELECT_DAYS } from 'shared/const'
import { createLessonThunk, updateLessonThunk } from 'store/lessons/thunk'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { LessonFormType } from 'store/lessons/type'
import { closeLessonsFormData, setFormInputData } from 'store/lessons/action'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'
import { isLessonFormStatusSelector } from '../../../../store/lessons/selector'

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
  const dispatch = useDispatch()
  const status = useSelector(isLessonFormStatusSelector)

  //==== Get from global state ====
  const schoolSubjectsData = useSelector(
    (state: AppStore) => state.schoolSubjects
  )

  const lessonFormData: LessonFormType = useSelector((state: AppStore) => ({
    day: state.lessons.lessonForm.day,
    schoolSubject: state.lessons.lessonForm.schoolSubject,
    numberOfLesson: state.lessons.lessonForm.numberOfLesson,
  }))

  //==== Handle changes/submit ====
  const handleChangeDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(
      setFormInputData({
        ...lessonFormData,
        day: event.target.value as typeof SELECT_DAYS[number] | null,
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
      }
      if (typeof status === 'number') {
        dispatch(updateLessonThunk(status, objSubmit))
      }
    }
  }

  const handleClose = () => {
    dispatch(closeLessonsFormData())
  }

  return (
    <div className={classes.formContainer}>
      <Card>
        <CardContent>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <FormControl
              variant='outlined'
              size='small'
              fullWidth
              margin='dense'
            >
              <InputLabel id='day-label'>Choose day</InputLabel>
              <Select
                labelId='day-label'
                value={lessonFormData.day ?? ''}
                onChange={handleChangeDay}
                label='Choose day'
              >
                {SELECT_DAYS.map(d => (
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
                value={lessonFormData.schoolSubject ?? ''}
                onChange={handleChangeSubject}
                label='Choose school subject'
              >
                {schoolSubjectsData.map(s => (
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
                value={lessonFormData.numberOfLesson ?? ''}
                onChange={handleChangeNumberOfLesson}
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
              Create lesson
            </Button>
          </form>
        </CardContent>
      </Card>
      <Fab
        onClick={handleClose}
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
