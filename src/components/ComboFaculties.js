import React from 'react'
import { LIST_FACULTIES } from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks'

function ComboFaculties(props) {
    const { loading, error, data } = useQuery(LIST_FACULTIES)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <select
            {...props}
        >
            {data.facultiesAll.map((faculty) => {
                return (
                    <option
                        key={faculty.id}
                        value={faculty.id}
                    >
                        {faculty.faculty}
                    </option>
                )
            })}
        </select>
    )
}

export default ComboFaculties