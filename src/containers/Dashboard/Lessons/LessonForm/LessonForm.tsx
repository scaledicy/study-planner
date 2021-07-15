import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { fetchSchoolSubjects } from 'store/schoolSubjects/thunk'

//todo move the variable outside the file
const selectDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
] as const

//todo move the interface outside the file
interface LessonRequest {
  day: typeof selectDays[number]
  school_subject: string
  start: string
  end: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createLesson: {
      marginTop: theme.spacing(2),
    },
  })
)

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
  const [day, setDay] = React.useState<typeof selectDays[number] | ''>('')
  const [schoolSubject, setSchoolSubject] = React.useState('')
  const [startTime, setStartTime] = React.useState('')
  const [endTime, setEndTime] = React.useState('')

  //==== Handle changes/submit ====
  const handleChangeDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDay(event.target.value as typeof selectDays[number] | '')
  }
  const handleChangeSubject = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSchoolSubject(event.target.value as string)
  }
  const handleChangeStartTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartTime(event.target.value as string)
  }
  const handleChangeEndTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value as string)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (day !== '') {
      const objSubmit: LessonRequest = {
        day,
        school_subject: schoolSubject,
        start: startTime,
        end: endTime,
      }

      console.log(objSubmit)
    }
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <FormControl variant='outlined' size='small' fullWidth margin='dense'>
        <InputLabel id='day-label'>Choose day</InputLabel>
        <Select
          labelId='day-label'
          value={day}
          onChange={handleChangeDay}
          label='Choose day'
        >
          {selectDays.map(d => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant='outlined' size='small' fullWidth margin='dense'>
        <InputLabel id='day-label'>Choose school subject</InputLabel>
        <Select
          labelId='day-label'
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
      <TextField
        label='Start time'
        variant='outlined'
        size='small'
        margin='dense'
        fullWidth
        value={startTime}
        onChange={handleChangeStartTime}
      />
      <TextField
        label='End time'
        variant='outlined'
        size='small'
        margin='dense'
        fullWidth
        value={endTime}
        onChange={handleChangeEndTime}
      />
      <Button
        fullWidth
        variant='contained'
        color='primary'
        className={classes.createLesson}
        type='submit'
      >
        Create lesson
      </Button>
    </form>
  )
}

export default LessonForm
