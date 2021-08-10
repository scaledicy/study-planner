import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import useLessonsList from './useLessonsList'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles(() =>
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
          <List>
            {data.lessons.map((l, i, arr) => (
              <div key={l.id}>
                <ListItem>
                  <ListItemText
                    primary={l.school_subject.name}
                    secondary={l.day}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge='end'
                      aria-label='edit'
                      onClick={() => handlers.editLessonHandler(l.id, l)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => {
                        handlers.deleteLessonFormHandler(l.id)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                {i !== arr.length - 1 && <Divider />}
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
      <Fab
        color='primary'
        aria-label='add'
        className={`${classes.addNewLesson} ${'' && classes.isRotate}`}
        onClick={handlers.createLessonFormHandler}
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

export default LessonsList
