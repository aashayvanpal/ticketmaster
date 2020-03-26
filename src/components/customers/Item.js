import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerItem(props) {
    const { id,index, name, email, mobile,handleDelete } = props
    // console.log('Item props : ',props.id)
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td><Link to={`/Customers/${id}`}>show</Link></td>
            <td><button onClick={(id)=>{
                handleDelete(props.id)
            }}>Delete</button></td>
            <td><Link to={`/Customers/edit/${id}`}>Update </Link></td>

        </tr>
    )
}