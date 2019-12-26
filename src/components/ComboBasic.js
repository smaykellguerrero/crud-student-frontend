import React from 'react'

function ComboBasic(props) {
    return (
        <select
            {...props}
        >
             {props.items.map((item) => {
                return (
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                )
            })}

        </select>
    )
}

export default ComboBasic