import React from 'react'

export default class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.customer ? props.customer.name : '',
            email: props.customer ? props.customer.email : '',
            mobile: props.customer ? props.customer.mobile : ''
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
            // id:this.props.customer._id
        }
        // Creating id only while editing and not while creating a new user
        this.props.customer && (formData.id = this.props.customer._id)

        console.log('From Data : ', formData)
        console.log('props :', this.props)
        this.props.handleCustomerSubmit(formData)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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

                    <input type='submit' />
                </form>
            </div>
        )
    }
}