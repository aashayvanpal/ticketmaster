import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios.js'
import EmployeeItem from './Item.js'

export default class EmployeesList extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }

    handleRemove = (id) => {
        console.log('inside employee handle remove ', id)

        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                // console.log(response.data)
                this.setState((prevState) => ({
                    employees: prevState.employees.filter(employee => employee._id !== response.data._id)
                }))
            })
            .catch((err) => {
                console.log(err)
            })
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
                            <th>Remove</th>
                            <th>Action</th>
                            <th>Update</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, i) => {
                            console.log(employee)
                            return (
                                <EmployeeItem key={employee._id}
                                    index={i}
                                    id={employee._id}
                                    name={employee.name}
                                    email={employee.email}
                                    mobile={employee.mobile}
                                    department={employee.department}
                                    handleRemove={this.handleRemove}


                                />

                            )
                        })}
                    </tbody>
                </table>


                <Link to='Employees/new'>Add Employee</Link>
            </div>
        )
    }



}