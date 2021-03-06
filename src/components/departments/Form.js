import React from 'react'

export default class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.department ? props.department.name : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }

        this.props.department && (formData.id = this.props.department._id)

        console.log('formData :', formData)
        console.log('props :', this.props)
        this.props.handleDepartmentSubmit(formData)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type='text' value={this.state.name} id='name' onChange={this.handleChange} name='name' />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}