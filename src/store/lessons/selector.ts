import { AppStore } from 'store/store'
import { Lesson } from 'services/lessons/type'
import { DAYS } from 'shared/const'
import { createSelector } from 'reselect'

export const getAllLessonsSelector = (state: AppStore): Lesson[] =>
  state.lessons.lessons

export const getFilterDaySelector = (
  state: AppStore
): typeof DAYS[number] | null => state.lessons.filterDay

export const isCreateFormSelector = (state: AppStore): boolean =>
  state.lessons.isCreateForm

export const isEditFormSelector = (state: AppStore): boolean =>
  state.lessons.isEditForm

export const getLessonsByDayFilterSelector = createSelector(
  getAllLessonsSelector,
  getFilterDaySelector,
  (allLessons, dayFilter): Lesson[] =>
    dayFilter ? allLessons.filter(i => i.day === dayFilter) : allLessons
)

export const isLessonFormStatusSelector = (state: AppStore): boolean | number =>
  state.lessons.isFormStatus
