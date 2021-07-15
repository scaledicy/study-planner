import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import React from 'react'
import useLessonsList from './useLessonsList'
import { Divider } from '@material-ui/core'

const LessonsList: React.FC = () => {
  const { data } = useLessonsList()

  return (
    <List>
      {data.lessons.map((l, ind, arr) => (
        <div key={l.id}>
          <ListItem>
            <ListItemText
              primary={l.school_subject.name}
              secondary='Jan 9, 2014'
            />
          </ListItem>
          {ind !== arr.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  )
}

export default LessonsList
