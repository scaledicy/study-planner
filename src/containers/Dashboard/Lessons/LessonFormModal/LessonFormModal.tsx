import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import { DAYS, LESSON_TIME } from 'shared/const'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import useLessonFormModal from './useLessonFormModal'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createLesson: {
      marginTop: theme.spacing(2),
    },
  })
)

const LessonFormModal: React.FC = () => {
  const { data, handlers } = useLessonFormModal()
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      aria-labelledby='dialog-title'
      open={!!data.status || typeof data.status === 'number'}
      onClose={handlers.handleClose}
      fullScreen={fullScreen}
      fullWidth
    >
      <DialogTitle id='dialog-title'>Set backup account</DialogTitle>
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
              {data.statusTextBtn}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  )
}

export default LessonFormModal
