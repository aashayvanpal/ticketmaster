import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'


export default class EmployeeShow extends React.Component {
    constructor() {
        super()
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        console.log('props :', this.props)
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Response Data :', response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch()
    }

    render() {
        return (
            <div>
                <h1>{this.state.employee.name} - {this.state.employee.email} - {this.state.employee.mobile} - {this.state.employee.department} </h1>
                <Link to={`/employees/edit/${this.state.employee._id}`}>Edit </Link>
            </div>
        )
    }
}