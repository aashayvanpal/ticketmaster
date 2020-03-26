import React from 'react'
import { Link } from 'react-router-dom'

export default function DepartmentItem(props) {
    const { id, name, handleRemove, handleUpdate } = props
    // console.log('Item props : ',props.id)
    return (
        <li>{name}
            <button onClick={() => {
                handleRemove(props.id)
            }}>Remove</button>
            <Link to={`/Departments/edit/${id}`}>Update </Link>
        </li>
    )
}