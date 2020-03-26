import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'


export default class CustomerShow extends React.Component {
    constructor() {
        super()
        this.state = {
            customer: {}
        }
    }

    componentDidMount() {
        console.log('props :', this.props)
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Response Data :', response.data)
                const customer = response.data
                this.setState({ customer })
            })
            .catch()
    }

    render() {
        return (
            <div>
                <h1>{this.state.customer.name} - {this.state.customer.email} - {this.state.customer.mobile}</h1>
                <Link to={`/Customers/edit/${this.state.customer._id}`}>Edit </Link>
            </div>
        )
    }
}