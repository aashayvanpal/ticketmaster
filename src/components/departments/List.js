import React from 'react'
import axios from '../../config/axios.js'

import DepartmentForm from './Form.js'

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

    handleRemove=(id)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=> {
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
                {this.state.departments.map(department => {
                    return <li key={department._id}>{department.name}
                    <button onClick={()=>{
                        this.handleRemove(department._id)}}>remove</button></li>
                })}
            </div>
        )
    }
}