export interface Lesson {
  id: number
  day: string
  school_subject: SchoolSubject
  start: string
  end: string
}

interface SchoolSubject {
  id: number
  name: string
}
