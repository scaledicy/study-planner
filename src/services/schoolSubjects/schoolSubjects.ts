import { instance } from 'services/instance'
import { SchoolSubject } from './type'

export const getSchoolSubjects = () =>
  instance.get<SchoolSubject[]>('school-subjects')
