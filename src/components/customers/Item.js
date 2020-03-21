import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerItem(props) {
    const { id,index, name, email, mobile } = props
    return (
        <tr>
            <td>{index + 1}</td>
            <td><Link to={`/Customers/${id}`}>{name}</Link></td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>show</td>
            <td>Delete</td>
            <td>Update</td>

        </tr>
    )
}