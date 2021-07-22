import { SchoolSubject } from 'services/schoolSubjects/type'
import { DAYS } from 'shared/const'

export interface Lesson {
  id: number
  day: typeof DAYS[number]
  school_subject: SchoolSubject
  start: string
  end: string
}

export interface LessonRequest {
  day: typeof DAYS[number]
  school_subject: string
  start: string
  end: string
}
