import { instance } from 'services/instance'
import { SchoolSubject } from './type'

const schoolSubjects = () => instance.get<SchoolSubject[]>('school-subjects')

export default schoolSubjects
