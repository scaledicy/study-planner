import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'
import { DAYS, LESSON_TIME } from 'shared/const'
import useLessonFormModal from './useLessonFormModal'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lessonFormModalActions: {
      marginTop: theme.spacing(2),
      paddingInline: 0,
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
      <DialogTitle id='dialog-title'>{data.statusText}</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete='off' onSubmit={handlers.handleSubmit}>
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
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
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
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
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
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
          <DialogActions className={classes.lessonFormModalActions}>
            <Button variant='contained' color='primary' type='submit'>
              {data.statusText.replace(/lesson/g, '')}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LessonFormModal
