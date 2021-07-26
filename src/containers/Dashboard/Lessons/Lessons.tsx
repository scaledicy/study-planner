import React from 'react'
import LessonsList from './LessonsList/LessonsList'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { DAYS } from 'shared/const'
import LessonFormModal from './LessonForm/LessonFormModal'
import useLessons from './useLessons'
import Timetable from './TimeTable/Timetable'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterGridContainer: {
      marginBottom: theme.spacing(4),
    },
  })
)

const Lessons: React.FC = () => {
  const { data, handlers } = useLessons()
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.filterGridContainer}>
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
      </Grid>

      <Grid container spacing={10}>
        <Grid item xs={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4' align='center'>
                Lessons list
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LessonsList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4' align='center'>
                Schedule
              </Typography>
            </Grid>
            <Timetable />
          </Grid>
        </Grid>
      </Grid>

      <LessonFormModal />
    </>
  )
}

export default Lessons
