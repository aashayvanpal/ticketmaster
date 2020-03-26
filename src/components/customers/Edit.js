import React from 'react'
import CustomerForm from './Form.js'
import axios from '../../config/axios.js'

export default class customerEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            customer: {}
        }
    }


    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const customer = response.data
                this.setState({ customer })
                console.log('Edit :', this.state.customer)
            })
            .catch(err => {
                console.log(err)
            })
    }


    handleCustomerSubmit = (customer) => {
        console.log('Edit customer : ', customer)
        axios.put(`/customers/${customer.id}`, customer, {
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
                    this.props.history.push(`/Customers/${response.data._id}`)
                }
            })
    }


    render() {
        return (
            <div>
                <h1> Edit Customer </h1>
                {this.state.customer.name && <CustomerForm customer={this.state.customer}
                    handleCustomerSubmit={this.handleCustomerSubmit} />}
            </div>

        )
    }
}