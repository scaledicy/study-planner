import React from 'react'
import { DAYS, LESSON_TIME } from 'shared/const'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import useTimetable from './useTimetable'

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
                  <div key={el.start}>
                    <ListItem
                      button
                      onClick={() => {
                        if (data.timetableLessons[day][el.start])
                          handlers.editLessonHandler(
                            data.timetableLessons[day][el.start]
                          )
                      }}
                    >
                      <ListItemText
                        primary={`${++i}. ${
                          data.timetableLessons[day][el.start]
                            ? data.timetableLessons[day][el.start]
                                .school_subject.name
                            : 'Empty subject'
                        }`}
                      />
                    </ListItem>
                    {i !== arr.length && <Divider />}
                  </div>
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
