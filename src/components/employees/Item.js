import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeItem(props) {
    const { id, index, name, email, mobile,department, handleRemove } = props
    console.log('Item props : ',props)
    return (
        <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{department}</td>
            <td><button onClick={() => {
                handleRemove(props.id)
            }}>Delete</button></td>
            <td><Link to={`/employees/${id}`}>show</Link></td>
            <td><Link to={`/employees/edit/${id}`}>Update </Link></td>
        </tr>
    )
}


// <tr key={employee._id}>
//     <td> {i + 1} </td>
//     <td> {employee.name} </td>
//     <td> {employee.email} </td>
//     <td> {employee.mobile} </td>
//     <td> {employee.department.name} </td>
//     <td> show </td>
//     <td><button onClick={() => {
//         this.handleRemove(employee._id)
//     }}> Remove</button> </td>
// </tr>