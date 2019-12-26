import { gql } from 'apollo-boost'

export const LIST_FACULTIES = gql`
query ListFaculties {
  facultiesAll{
    id
    faculty
  }
}
`
export const LIST_SCHOOLS = gql`
query schoolsByIdFaculty($id: ID!){
  schoolsByIdFaculty(idFaculty: $id){
    id
    idFaculty
    school
  }
}
`
export const LIST_STUDENTS = gql`
query ListStudents {
  studentsAll{
    id
    firstName
    lastName
    sex
    idSchool
    idFaculty
    school
    email
    phone
    ubigeo
    address
    status
  }
}
`

