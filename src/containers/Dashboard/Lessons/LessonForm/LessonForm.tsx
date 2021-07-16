import React, { useCallback } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { fetchSchoolSubjects } from 'store/schoolSubjects/thunk'
import { LessonRequest } from 'services/lessons/type'
import { LESSON_TIME, SELECT_DAYS } from 'shared/const'
import { createLessonThunk } from 'store/lessons/thunk'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createLesson: {
      marginTop: theme.spacing(2),
    },
  })
)

//todo move logic out of a component

const LessonForm: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  //==== Callback handlers ====
  const getSchoolSubjectsHandler = useCallback(() => {
    dispatch(fetchSchoolSubjects())
  }, [dispatch])

  //==== Get from global state ====
  const schoolSubjectsData = useSelector(
    (state: AppStore) => state.schoolSubjects
  )

  //==== Local state ====
  const [day, setDay] = React.useState<typeof SELECT_DAYS[number] | ''>('')
  const [schoolSubject, setSchoolSubject] = React.useState('')
  const [numberOfLesson, setNumberOfLesson] =
    React.useState<number | null>(null)

  //==== Handle changes/submit ====
  const handleChangeDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDay(event.target.value as typeof SELECT_DAYS[number] | '')
  }
  const handleChangeSubject = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSchoolSubject(event.target.value as string)
  }
  const handleChangeNumberOfLesson = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setNumberOfLesson(parseInt(event.target.value as string))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (day !== '' && numberOfLesson !== null) {
      const objSubmit: LessonRequest = {
        day,
        school_subject: schoolSubject,
        ...LESSON_TIME[numberOfLesson],
      }
      dispatch(createLessonThunk(objSubmit))

      //==== Clear form after submit ====
      setDay('')
      setSchoolSubject('')
      setNumberOfLesson(null)
    }
  }

  return (
    <Card>
      <CardContent>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
            <InputLabel id='day-label'>Choose day</InputLabel>
            <Select
              labelId='day-label'
              value={day}
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
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
            <InputLabel id='choose-school-subject'>
              Choose school subject
            </InputLabel>
            <Select
              labelId='choose-school-subject'
              value={schoolSubject}
              onChange={handleChangeSubject}
              onOpen={getSchoolSubjectsHandler}
              label='Choose school subject'
            >
              {schoolSubjectsData.map(s => (
                <MenuItem key={s.id} value={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
            <InputLabel id='count-of-lesson'>Count of lesson</InputLabel>
            <Select
              labelId='count-of-lesson'
              value={numberOfLesson ?? ''}
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
  )
}

export default LessonForm
