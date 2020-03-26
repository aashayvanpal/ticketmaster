import React from 'react'
import CustomerForm from './Form.js'
import axios from '../../config/axios.js'


export default class CustomerNew extends React.Component {
    constructor() {
        super()
        this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this)
    }

    handleCustomerSubmit(customer) {
        console.log('New Component : ', customer)
        axios.post('/customers', customer, {
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
                    this.props.history.push('/Customers')
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Add Customer</h1>
                <CustomerForm handleCustomerSubmit={this.handleCustomerSubmit} />
            </div>
        )
    }
}