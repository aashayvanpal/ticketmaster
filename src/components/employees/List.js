import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios.js'

export default class EmployeesList extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Data : ', response.data)
                const employees = response.data
                this.setState({ employees })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1>Listing Employees - {this.state.employees.length}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(function (employee,i) {
                            return (
                                <tr key={employee._id}>
                                    <td> {i + 1} </td>
                                    <td> {employee.name} </td>
                                    <td> {employee.email} </td>
                                    <td> {employee.mobile} </td>
                                    <td> {employee.department.name} </td>
                                    <td> show </td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>


                <Link to='Employees/new'>Add Employee</Link>
            </div>
        )
    }

}