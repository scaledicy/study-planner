import { SchoolSubject } from 'services/schoolSubjects/type'
import { SELECT_DAYS } from 'shared/const'

export interface Lesson {
  id: number
  day: typeof SELECT_DAYS[number]
  school_subject: SchoolSubject
  start: string
  end: string
}

export interface LessonRequest {
  day: typeof SELECT_DAYS[number]
  school_subject: string
  start: string
  end: string
}
