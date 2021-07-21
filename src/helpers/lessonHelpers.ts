import { Lesson, LessonRequest } from 'services/lessons/type'
import { LessonFormType } from 'store/lessons/type'

export function lessonToRequest(lesson: Lesson): LessonRequest {
  return {
    day: lesson.day,
    school_subject: lesson.school_subject.id.toString(),
    start: lesson.start,
    end: lesson.end,
  }
}

export function lessonToForm(lesson: Lesson): LessonFormType {
  return {
    day: lesson.day,
    schoolSubject: lesson.school_subject.id.toString(),
    numberOfLesson: 1,
  }
}
