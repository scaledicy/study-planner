import React from 'react'
import LessonsList from './LessonsList/LessonsList'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { DAYS } from 'shared/const'
import LessonForm from './LessonForm/LessonForm'
import useLessons from './useLessons'
import Timetable from './TimeTable/Timetable'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timetableContainer: {
      marginTop: theme.spacing(4),
      maxWidth: '1400px',
      marginInline: 'auto',
    },
  })
)

const Lessons: React.FC = () => {
  const { data, handlers } = useLessons()
  const classes = useStyles()

  return (
    <>
      <Grid container justifyContent='space-between'>
        <Grid item xs={3}>
          <LessonsList />
        </Grid>
        <Grid item xs={2}>
          <FormControl variant='outlined' size='small' fullWidth margin='dense'>
            <InputLabel id='filter-by-day'>Filtering by day</InputLabel>
            <Select
              labelId='filter-by-day'
              value={data.filterDay ?? ''}
              onChange={handlers.handleFilterDay}
              label='Filtering by day'
            >
              {DAYS.map(d => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          {data.status || typeof data.status === 'number' ? (
            <LessonForm />
          ) : null}
        </Grid>
      </Grid>

      <Grid container spacing={5} className={classes.timetableContainer}>
        <Timetable />
      </Grid>
    </>
  )
}

export default Lessons
