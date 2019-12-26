import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LIST_STUDENTS } from '../graphql/queries'

function TableStudents(props) {
    return (
        <div className='mt-4' >
            <h4>Alumnos registrados</h4>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Escuela</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map((student) =>
                        <tr key={student.id}>
                            <th scope="row" >
                                <button
                                    onClick={() => { props.onEditStudentBtnClick(student) }}
                                    type="button"
                                    className="btn btn-link">{student.id}
                                </button>
                            </th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.school}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button
                                    className='btn btn-success'
                                    onClick={() => {
                                        props.onEditStudentBtnClick(student)
                                    }}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

function ListStudents({ onEditStudentBtnClick }) {
    const { loading, error, data, refetch } = useQuery(LIST_STUDENTS)

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>

    return <div>
        <TableStudents
            onEditStudentBtnClick={onEditStudentBtnClick}
            students={data.studentsAll}
        />
        <button className='btn btn-info'
            onClick={() => refetch()}>
            Sincronizar con BD
            </button>
    </div>
}

export default ListStudents