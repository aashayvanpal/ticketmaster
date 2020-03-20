import React from 'react'
import EmployeeForm from './Form.js'
import axios from '../../config/axios.js'


export default class EmployeeNew extends React.Component {
    constructor() {
        super()


        this.handleEmployeeSubmit = this.handleEmployeeSubmit.bind(this)
    }

    handleEmployeeSubmit(employee) {
        console.log('New Component : ', employee)
        axios.post('/employees', employee, {
            headers: {
                "x-auth": localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    console.log('Validation Error : ', response.data.errors)
                    window.alert(response.data.message)
                }
                else {
                    console.log('success', response.data)
                    this.props.history.push('/Employees')
                }
            })

    }

    render() {
        return (
            <div>
                <h1>Add Employee</h1>
                <EmployeeForm handleEmployeeSubmit={this.handleEmployeeSubmit} />
            </div>
        )
    }
}