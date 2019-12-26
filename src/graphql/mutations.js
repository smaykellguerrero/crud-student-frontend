import { gql } from 'apollo-boost';

export const INSERT_STUDENT = gql`
mutation InsertStudent($firstName: String!, $lastName: String!,$sex: String!,$email: String!,$phone: String!,$idSchool: ID!,$ubigeo: String!,$address: String!,$status: String!){
  insertStudent(firstName: $firstName,lastName: $lastName,sex: $sex, email : $email,phone: $phone, idSchool: $idSchool,ubigeo: $ubigeo,address: $address, status: $status){
    firstName
    lastName
    sex
    email
    phone
    idSchool
    school
    ubigeo
    address
    status
  }
  }
  `
export const DELETE_STUDENT = gql`
mutation DeleteStudent($id: ID!) {
  deleteStudent(idStudent: $id)
}
`
export const UPDATE_STUDENT = gql`
mutation UpdateStudent($firstName: String!, $lastName: String!,$sex: String!,$email: String!,$phone: String!,$idSchool: ID!,$ubigeo: String!,$address: String!,$status: String!,$id: ID!){
  updateStudent(firstName: $firstName,lastName: $lastName,sex: $sex, email : $email,phone: $phone, idSchool: $idSchool,ubigeo: $ubigeo,address: $address, status: $status, id: $id){
    firstName
    lastName
    sex
    email
    phone
    idSchool
    idFaculty
    school
    ubigeo
    address
    status
  }
  }
`

