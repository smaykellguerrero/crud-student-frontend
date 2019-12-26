import React, { useState } from 'react'
import ComboFaculties from './ComboFaculties'
import ComboSchools from './ComboSchools'
import ComboBasic from './ComboBasic'
import ListStudents from './ListStudents'
import { useMutation } from '@apollo/react-hooks'
import { INSERT_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../graphql/mutations'
import Swal from 'sweetalert2'
const dataStudentInitial = { idFaculty: 1, id: null, firstName: '', lastName: '', sex: 'M', email: '', phone: '', idSchool: 0, ubigeo: '', address: '', status: 'E' }

function FormStudent() {

    const [dataStudent, setDataStudent] = useState(dataStudentInitial)
    const [insertStudent, { loading: loadingInsertStudent }] = useMutation(INSERT_STUDENT)
    const [deleteStudent, { loading: loadingDeleteStudent }] = useMutation(DELETE_STUDENT)
    const [updateStudent, { loading: loadingUpdateStudent }] = useMutation(UPDATE_STUDENT)

    const { id, firstName, lastName, sex, email, phone, idSchool, ubigeo, address, status, idFaculty } = dataStudent

    const sexes = [
        { "id": "M", "name": "Masculino" },
        { "id": "F", "name": "Femenino", }
    ]
    
    const states = [
        { "id": "E", "name": "Activo" }, 
        { "id": "D", "name": "Inactivo", }
    ]

    function onInsertStudent() {
        const { firstName, lastName, sex, email, phone, idSchool, ubigeo, address, status } = dataStudent
        insertStudent({ variables: { firstName, lastName, sex, email, phone, idSchool, ubigeo, address, status } })
            .then(() => Swal.fire({
                icon: 'success',
                title: 'Estudiante fue guardado!',
                showConfirmButton: false,
                timer: 1500
            }))
            .catch(() => Swal.fire({
                icon: 'error',
                title: 'Uups...',
                text: 'Parece que faltan datos!'
            }))
    }

    function onDeleteStudent() {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No se podra revertir, Si para borrar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.value) {
                const { id } = dataStudent
                deleteStudent({ variables: { id } })
                    .then(() => Swal.fire({
                        icon: 'success',
                        title: 'Estudiante fue eliminado del sistema',
                        showConfirmButton: false,
                        timer: 1500
                    }),
                        setDataStudent(dataStudentInitial))
            }
        })
    }

    function onUpdateStudent() {

        updateStudent({ variables: { firstName, lastName, sex, email, phone, idSchool, ubigeo, address, status, id } })
            .then(() => Swal.fire({
                icon: 'success',
                title: 'Estudiante actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            }))
            .catch(() =>
                Swal.fire({
                    icon: 'error',
                    title: 'Estudiante No fue actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
    }

    function onEditDataStudent(student) {
        setDataStudent(student)
    }

    function onCancelEdit() {
        setDataStudent(dataStudentInitial)
    }

    return (
        <div>
            <h1>Formulario Estudiante</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Nombre(s)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, firstName: value }))
                            }}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Apellidos</label>
                        <input
                            type="text"
                            className=" form-control"
                            value={lastName}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, lastName: value }))
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Facultad</label>
                        <ComboFaculties
                            className='form-control'
                            value={idFaculty}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, idFaculty: value }))
                            }}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Escuela</label>
                        <ComboSchools
                            className='form-control'
                            id={idFaculty}
                            value={idSchool}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, idSchool: value }))
                            }}
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Correo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, email: value }))
                            }}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, phone: value }))
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <label className="control-label">Ubigeo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ubigeo}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, ubigeo: value }))
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <label>Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, address: value }))
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <label>Sexo</label>
                        <ComboBasic
                            value={sex}
                            className=" form-control"
                            items={sexes}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, sex: value }))
                            }}
                        >
                        </ComboBasic>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <label>Estado</label>
                        <ComboBasic
                            value={status}
                            className=" form-control"
                            items={states}
                            onChange={(e) => {
                                const value = e.target.value
                                setDataStudent(prevDatos => ({ ...prevDatos, status: value }))
                            }}
                        >
                        </ComboBasic>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        {!id &&
                            <button
                                className='btn btn-primary mr-2'
                                disabled={loadingInsertStudent}
                                onClick={onInsertStudent}
                            >
                                {loadingInsertStudent ? 'Agregando...' : 'Agregar'}
                            </button>
                        }

                        {id && [
                            <button
                                className='mr-2 btn btn-success'
                                disabled={loadingUpdateStudent}
                                onClick={onUpdateStudent}
                            >
                                {loadingUpdateStudent ? 'Actualizando...' : 'Actualizar'}
                            </button>,
                            <button
                                className='mr-2 btn btn-danger'
                                disabled={loadingDeleteStudent}
                                onClick={onDeleteStudent}
                            >
                                {loadingDeleteStudent ? 'Eliminando...' : 'Eliminar'}
                            </button>,
                            <button
                                className='btn btn-warning'
                                onClick={onCancelEdit}
                            >
                                Cancelar
                    </button>
                        ]}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <ListStudents
                    onEditStudentBtnClick={onEditDataStudent}
                />
            </div>
        </div>
    )
}

export default FormStudent