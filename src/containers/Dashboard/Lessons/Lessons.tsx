import React, { useCallback } from 'react'
import LessonsList from './LessonsList/LessonsList'
import LessonCreate from './LessonCreate/LessonCreate'
import Grid from '@material-ui/core/Grid/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { SELECT_DAYS } from 'shared/const'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import { setFilterDay } from 'store/lessons/action'

const Lessons: React.FC = () => {
  const dispatch = useDispatch()
  const filterDay = useSelector((state: AppStore) => state.lessons.filterDay)

  const getLessonsHandler = useCallback(
    (day: typeof SELECT_DAYS[number] | null) => dispatch(setFilterDay(day)),
    [dispatch]
  )

  const handleFilterDay = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value: typeof SELECT_DAYS[number] | null =
      event.target.value === ''
        ? null
        : (event.target.value as typeof SELECT_DAYS[number])
    getLessonsHandler(value)
  }

  return (
    <Grid container justifyContent='space-between'>
      <Grid item xs={3}>
        <LessonsList />
      </Grid>
      <Grid item xs={2}>
        <FormControl variant='outlined' size='small' fullWidth margin='dense'>
          <InputLabel id='filter-by-day'>Filtering by day</InputLabel>
          <Select
            labelId='filter-by-day'
            value={filterDay ?? ''}
            onChange={handleFilterDay}
            label='Filtering by day'
          >
            {SELECT_DAYS.map(d => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <LessonCreate />
      </Grid>
    </Grid>
  )
}

export default Lessons
