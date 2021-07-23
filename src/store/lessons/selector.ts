import { AppStore } from 'store/store'
import { Lesson } from 'services/lessons/type'
import { DAYS } from 'shared/const'
import { createSelector } from 'reselect'
import { compareByStartTime } from 'helpers/lessonHelpers'

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

export const getLessonsByTimetableSelector = createSelector(
  getAllLessonsSelector,
  (allLessons): Record<typeof DAYS[number], Lesson[]> => {
    const daysReduce = (
      res: Record<typeof DAYS[number], Lesson[]>,
      day: typeof DAYS[number]
    ): Record<typeof DAYS[number], Lesson[]> => {
      res[day] = allLessons
        .filter(lesson => lesson.day === day)
        .sort(compareByStartTime)
      return res
    }
    return DAYS.reduce(daysReduce, {} as Record<typeof DAYS[number], Lesson[]>)
  }
)

export const isLessonFormStatusSelector = (state: AppStore): boolean | number =>
  state.lessons.isFormStatus
