import React from 'react'
import axios from '../../config/axios.js'

import DepartmentForm from './Form.js'
import DepartmentItem from './Item.js'

export default class DepartmentList extends React.Component {
    constructor() {
        super()

        this.state = {
            departments: []
        }
    }

    componentDidMount() {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const departments = response.data
                this.setState({ departments })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleFormSubmit = (formData) => {
        console.log(formData)

        axios.post('/departments', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                // console.log(response.data)
                if (response.data.errors) {
                    alert(response.data.message)
                } else {
                    const department = response.data
                    this.setState((prevState) => {
                        return {
                            departments: [...prevState.departments, department]
                            // departments:[].concat(prevState.departments,department)
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleUpdate = (id, department) => {
        console.log('Edit Department update: ', department)
        console.log('Edit Department update.name: ', department.name)
        axios.put(`/Departments/edit/${id}`, department, {
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

    handleRemove = (id) => {
        // console.log('handle remove clicked! ', id)
        axios.delete(`/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                // console.log(response.data)
                this.setState((prevState) => ({
                    departments: prevState.departments.filter(department => department._id !== response.data._id)
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1>Listing Departments - {this.state.departments.length}</h1>
                <DepartmentForm handleFormSubmit={this.handleFormSubmit} />
                <ul>
                    {this.state.departments.map(department => {
                        return <DepartmentItem key={department._id}
                            id={department._id}
                            name={department.name}
                            handleUpdate={this.handleUpdate}
                            handleRemove={this.handleRemove}
                        />
                    })}
                </ul>
            </div>
        )
    }
}