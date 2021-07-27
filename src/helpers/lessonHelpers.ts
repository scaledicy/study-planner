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

export const lessonsToTimeRecord = (lessons: Lesson[]): LessonTimeRecord =>
  lessons.reduce((res, lesson) => {
    res[lesson.start] = lesson
    return res
  }, {} as LessonTimeRecord)
