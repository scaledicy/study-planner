import { SchoolSubject } from 'services/schoolSubjects/type'

export interface Lesson {
  id: number
  day: string
  school_subject: SchoolSubject
  start: string
  end: string
}
