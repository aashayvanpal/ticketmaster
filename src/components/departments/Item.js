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
            {/* <Link to={`/Customers/edit/${id}`}>Update </Link> */}
        </li>
    )
}


// <li key={department._id}>{department.name}
//     <button onClick={() => {
//         this.handleRemove(department._id)
//     }}>remove</button>
//     <button onClick={() => {
//         this.handleUpdate(department._id, department)
//     }}>Update</button>
//     <Link to={`/Departments/edit/${department._id}`}>Update </Link>
// </li>