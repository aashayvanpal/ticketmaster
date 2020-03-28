import React from 'react'
import axios from '../../config/axios'

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.employee? props.employee.name:'',
            email: props.employee? props.employee.email:'',
            mobile: props.employee? props.employee.mobile:'',
            department: props.employee? props.employee.department:'',
            departments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        // creating emplyee id while editing and not while creating new employee 
        this.props.employee && (formData.id = this.props.employee._id)


        console.log('From Data : ', formData)
        this.props.handleEmployeeSubmit(formData)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            .catch()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text' value={this.state.name} onChange={this.handleChange} name='name' />
                    </label><br />

                    <label>
                        Email
                        <input type='text' value={this.state.email} onChange={this.handleChange} name='email' />
                    </label><br />

                    <label>
                        Mobile
                        <input type='text' value={this.state.mobile} onChange={this.handleChange} name='mobile' />
                    </label><br />

                    <label>
                        Department
                    </label>
                    <select value={this.state.department} onChange={this.handleChange} name="department">
                        <option value="">Select</option>

                        {this.state.departments.map(department => {
                            return <option key={department._id} value={department._id}>{department.name}</option>
                        })}
                    </select><br />

                    <input type='submit' />

                </form>
            </div>
        )
    }
}