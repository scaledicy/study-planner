import { Lesson, LessonRequest } from 'services/lessons/type'
import { LessonFormType, LessonTimeRecord } from 'store/lessons/type'
import { LESSON_TIME } from 'shared/const'

export function lessonToRequest(lesson: Lesson): LessonRequest {
  return {
    day: lesson.day,
    school_subject: lesson.school_subject.id.toString(),
    start: lesson.start,
    end: lesson.end,
  }
}

export function lessonToForm(lesson: Lesson): LessonFormType {
  const numberOfLesson = LESSON_TIME.findIndex(el => el.start === lesson.start)
  return {
    day: lesson.day,
    schoolSubject: lesson.school_subject.id.toString(),
    numberOfLesson,
  }
}

const parseTime = (timeString: string): number => {
  if (timeString === '') return 0

  const d = new Date('2000-01-01T' + timeString)

  return d.getTime()
}

export const compareByStartTime = (lesson1: Lesson, lesson2: Lesson) => {
  const start1 = parseTime(lesson1.start)
  const start2 = parseTime(lesson2.start)

  if (start1 < start2) {
    return -1
  } else if (start1 > start2) {
    return 1
  } else return 0
}

export const lessonsToTimeRecord = (lessons: Lesson[]): LessonTimeRecord =>
  lessons.reduce((res, lesson) => {
    res[lesson.start] = lesson
    return res
  }, {} as LessonTimeRecord)

// export const lessonsToTimeRecord = (lessons: Lesson[]): LessonTimeRecord => {
//   let obj:LessonTimeRecord = {}
//   lessons.forEach(i => {
//     obj[i.start] = i
//   })
//   return obj
// }
