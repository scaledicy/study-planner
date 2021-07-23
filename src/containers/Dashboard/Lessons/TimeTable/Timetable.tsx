import React from 'react'
import { DAYS, LESSON_TIME } from 'shared/const'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { useSelector } from 'react-redux'
import { getLessonsByTimetableSelector } from 'store/lessons/selector'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const Timetable: React.FC = () => {
  const timetableLessons = useSelector(getLessonsByTimetableSelector)

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
                    <ListItem button>
                      <ListItemText
                        primary={`${++i}. ${
                          timetableLessons[day][el.start]
                            ? timetableLessons[day][el.start].school_subject
                                .name
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
