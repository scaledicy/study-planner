import { LessonsState } from './type'

export const initialState: LessonsState = {
  lessons: [],
  filterDay: null,
  isCreateForm: false,
  isEditForm: false,
  isFormStatus: false,
  lessonForm: {
    day: null,
    schoolSubject: null,
    numberOfLesson: null,
  },
}
