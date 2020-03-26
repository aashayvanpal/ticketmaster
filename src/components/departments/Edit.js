import React from 'react'
import DepartmentForm from './Form'
import axios from '../../config/axios.js'

export default class departmentEdit extends React.Component {
    constructor() {
        super()

        this.state = {
            department: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const department = response.data
                this.setState({ department })
                console.log('Edit :', this.state.department)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDepartmentSubmit = (department) => {
        console.log('Edit department changes: ', department)
        axios.put(`/departments/${department.id}`, department, {
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
                    this.props.history.push(`/departments`)
                }
            })

    }


    render() {
        return (
            <div>
                <h1> Edit Department </h1>
                {this.state.department.name && <DepartmentForm department={this.state.department}
                    handleDepartmentSubmit={this.handleDepartmentSubmit} />}
            </div>

        )
    }
}