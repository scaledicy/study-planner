import { LessonsState } from './type'

export const initialState: LessonsState = {
  lessons: [],
  filterDay: null,
  isCreateForm: false,
  isEditForm: false,
  lessonForm: {
    day: null,
    schoolSubject: null,
    numberOfLesson: null,
  },
}
