import { AppStore } from 'store/store'
import { Lesson } from 'services/lessons/type'
import { DAYS } from 'shared/const'
import { createSelector } from 'reselect'
import { LessonTimeRecord } from './type'
import { lessonsToTimeRecord } from 'helpers/lessonHelpers'

export const getAllLessonsSelector = (state: AppStore): Lesson[] =>
  state.lessons.lessons

export const getFilterDaySelector = (
  state: AppStore
): typeof DAYS[number] | null => state.lessons.filterDay

export const isCreateFormSelector = (state: AppStore): boolean =>
  state.lessons.isCreateForm

export const getLessonsByDayFilterSelector = createSelector(
  getAllLessonsSelector,
  getFilterDaySelector,
  (allLessons, dayFilter): Lesson[] =>
    dayFilter ? allLessons.filter(i => i.day === dayFilter) : allLessons
)

type DayIndex = typeof DAYS[number]
type TimetableType = Record<DayIndex, LessonTimeRecord>

export const getLessonsByTimetableSelector = createSelector(
  getAllLessonsSelector,
  (allLessons): TimetableType => {
    const daysReduce = (
      res: TimetableType,
      day: typeof DAYS[number]
    ): TimetableType => {
      res[day] = lessonsToTimeRecord(
        allLessons.filter(lesson => lesson.day === day)
      )
      return res
    }
    return DAYS.reduce(daysReduce, {} as TimetableType)
  }
)

export const isLessonFormStatusSelector = (state: AppStore): boolean | number =>
  state.lessons.isFormStatus
