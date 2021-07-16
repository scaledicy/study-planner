import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import React from 'react'
import useLessonsList from './useLessonsList'
import { Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      position: 'relative',
    },
    addNewLesson: {
      position: 'absolute',
      top: '-28px',
      right: '-28px',
      transition: 'transform .3s',
    },
    isRotate: {
      transform: 'rotate(45deg)',
    },
  })
)

const LessonsList: React.FC = () => {
  const { data, handlers } = useLessonsList()
  const classes = useStyles()

  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardContent>
          <Typography variant='h5' gutterBottom align='center'>
            Lessons list
          </Typography>
          <List>
            {data.lessons.map((l, ind, arr) => (
              <div key={l.id}>
                <ListItem>
                  <ListItemText
                    primary={l.school_subject.name}
                    secondary={l.day}
                  />
                </ListItem>
                {ind !== arr.length - 1 && <Divider />}
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
      <Fab
        color='primary'
        aria-label='add'
        className={`${classes.addNewLesson} ${
          data.isLessonForm && classes.isRotate
        }`}
        onClick={handlers.toggleLessonFormHandler}
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

export default LessonsList
