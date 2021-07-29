import React from 'react'
import { DAYS, LESSON_TIME } from 'shared/const'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import useTimetable from './useTimetable'
import TimetableCell from './TimetableCell/TimetableCell'

const Timetable: React.FC = () => {
  const { data, handlers } = useTimetable()

  return (
    <>
      {DAYS.map(day => (
        <Grid key={day} item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='h5' gutterBottom align='center'>
                {day}
              </Typography>
              <List>
                {LESSON_TIME.map((el, i, arr) => (
                  <TimetableCell
                    key={el.start}
                    number={i + 1}
                    isNotLast={i + 1 !== arr.length}
                    lesson={data.timetableLessons[day][el.start]}
                    onClick={() => {
                      handlers.handleClickCell(
                        data.timetableLessons[day][el.start],
                        {
                          day,
                          schoolSubject: null,
                          numberOfLesson: i,
                        }
                      )
                    }}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default Timetable
