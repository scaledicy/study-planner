import { SchoolSubject } from 'services/schoolSubjects/type'
import { SET_SCHOOL_SUBJECTS } from './reducer'

type SetSchoolSubjectsActionType = {
  type: typeof SET_SCHOOL_SUBJECTS
  schoolSubjects: SchoolSubject[]
}

export const setSchoolSubjects = (
  schoolSubjects: SchoolSubject[]
): SetSchoolSubjectsActionType => ({
  type: SET_SCHOOL_SUBJECTS,
  schoolSubjects,
})
