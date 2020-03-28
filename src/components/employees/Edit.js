import React from 'react'
import EmployeeForm from './Form'
import axios from '../../config/axios.js'

export default class employeeEdit extends React.Component {
    constructor() {
        super()

        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const employee = response.data
                this.setState({ employee })
                console.log('Edit :', this.state.employee)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleEmployeeSubmit = (employee) => {
        console.log('Edit employee changes: ', employee)
        console.log('Edit employee changes get id: ', employee.id)
        axios.put(`/employees/${employee.id}`, employee, {
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
                    this.props.history.push(`/employees`)
                }
            })

    }


    render() {
        return (
            <div>
                <h1> Edit Employee </h1>
                {this.state.employee.name && <EmployeeForm employee={this.state.employee}
                    handleEmployeeSubmit={this.handleEmployeeSubmit} />}
            </div>

        )
    }
}