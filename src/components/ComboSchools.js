import React from 'react'
import { LIST_SCHOOLS } from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks'

function ComboSchools(props) {
    const { loading, error, data } = useQuery(LIST_SCHOOLS, { variables: { id: props.id } })
    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <select
            {...props}
        >
            <option
                key='0'
                value='0'
            >Seleccione escuela</option>
            {data.schoolsByIdFaculty.map((school) => {
                return (
                    <option
                        key={school.id}
                        value={school.id}
                    >
                        {school.school}
                    </option>
                )
            })}
        </select>
    )
}

export default ComboSchools