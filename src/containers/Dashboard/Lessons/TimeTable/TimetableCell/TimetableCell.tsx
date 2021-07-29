import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Lesson } from 'services/lessons/type'

interface TimetableCellProps {
  isNotLast: boolean
  lesson: Lesson | undefined
  number: number
  onClick: () => void
}

const TimetableCell: React.FC<TimetableCellProps> = ({
  isNotLast,
  lesson,
  onClick,
  number,
}) => {
  return (
    <>
      <Tooltip title='Edit'>
        <ListItem button onClick={onClick}>
          <ListItemText
            primary={`${number}. ${
              lesson ? lesson.school_subject.name : 'Empty subject'
            }`}
          />
        </ListItem>
      </Tooltip>
      {isNotLast && <Divider />}
    </>
  )
}

export default TimetableCell
