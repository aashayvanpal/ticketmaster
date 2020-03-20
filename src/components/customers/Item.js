import React from 'react'

export default function CustomerItem(props) {
    const { index, name, email, mobile } = props
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>show</td>
            <td>Delete</td>
            <td>Update</td>

        </tr>
    )
}