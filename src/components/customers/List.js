import React from 'react'
import { Link } from 'react-router-dom'
import CustomerItem from './Item.js'
import axios from '../../config/axios.js'

export default class CustomersList extends React.Component {
    constructor() {
        super()
        this.state = {
            customers: []
        }
    }

    handleDelete = (id) => {
        // console.log('inside handleDelete ! ',id)
        axios.delete(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                // console.log(response.data)
                this.setState((prevState) => ({
                    customers: prevState.customers.filter(customer => customer._id !== response.data._id)
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Data : ', response.data)
                const customers = response.data
                this.setState({ customers })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1>Listing Customers - {this.state.customers.length}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                            <th>Remove</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.customers.map((customer, i) => {
                            return (
                                <CustomerItem
                                    key={customer._id}
                                    id={customer._id}
                                    index={i}
                                    name={customer.name}
                                    email={customer.email}
                                    mobile={customer.mobile}
                                    handleDelete={this.handleDelete}
                                />
                                // <CustomerItem {...customer,index}/>
                            )
                        })}
                    </tbody>
                </table>
                <Link to='Customers/new'>Add Customer</Link>
            </div>
        )
    }

}