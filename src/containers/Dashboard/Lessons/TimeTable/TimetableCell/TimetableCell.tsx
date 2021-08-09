import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Lesson, LessonRequest } from 'services/lessons/type'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from 'store/store'
import {
  createLessonThunk,
  deleteLessonThunk,
  updateLessonThunk,
} from 'store/lessons/thunk'
import { DAYS, LESSON_TIME } from 'shared/const'

interface TimetableCellProps {
  isNotLast: boolean
  lesson: Lesson | undefined
  number: number
  day: typeof DAYS[number]
  time: typeof LESSON_TIME[number]
}

const TimetableCell: React.FC<TimetableCellProps> = ({
  isNotLast,
  lesson,
  number,
  time,
  day,
}) => {
  const dispatch = useDispatch()

  //==== Local state ====
  const [isOpen, setIsOpen] = useState(false)

  const schoolSubjectsData = useSelector(
    (state: AppStore) => state.schoolSubjects
  )

  const handleChangeSubject = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    let subjectId = event.target.value as string
    setIsOpen(false)

    const lessonRequest: LessonRequest = {
      day,
      school_subject: subjectId.toString(),
      start: time.start,
      end: time.end,
    }

    if (lesson && subjectId !== 'null') {
      dispatch(updateLessonThunk(lesson.id, lessonRequest))
    } else if (!lesson && subjectId !== 'null') {
      dispatch(createLessonThunk(lessonRequest))
    } else if (lesson && subjectId === 'null') {
      dispatch(deleteLessonThunk(lesson.id))
    }
  }

  return (
    <>
      {isOpen ? (
        <FormControl variant='outlined' size='small' fullWidth margin='dense'>
          <InputLabel id='choose-school-subject'>
            Choose school subject
          </InputLabel>
          <Select
            labelId='choose-school-subject'
            value={lesson?.school_subject.id ?? 'null'}
            label='Choose school subject'
            onClose={() => setIsOpen(false)}
            onChange={handleChangeSubject}
            open={isOpen}
          >
            <MenuItem value={'null'}>Empty subject</MenuItem>
            {schoolSubjectsData.map(s => (
              <MenuItem key={s.id} value={s.id}>
                {s.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Tooltip title='Edit'>
          <ListItem button onClick={() => setIsOpen(true)}>
            <ListItemText
              primary={`${number}. ${
                lesson ? lesson.school_subject.name : 'Empty subject'
              }`}
            />
          </ListItem>
        </Tooltip>
      )}
      {isNotLast && <Divider />}
    </>
  )
}

export default TimetableCell
