import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import CustomersList from './customers/List.js'
import CustomerNew from './customers/New.js'
import DepartmentList from './departments/List.js'


export default class Home extends React.Component {


    render() {
        return (


            <BrowserRouter>
                <h1>Ticket Master </h1>
                <Link to="/">Home</Link>
                <Link to="/Customers">Customers</Link>
                <Link to="/Departments">Departments</Link>
                <Route path="/">

                </Route>

                <Route path="/Customers" component={CustomersList} exact={true}>

                </Route>

                <Route path="/Customers/new" component={CustomerNew} >

                </Route>

                <Route path="/Departments" component={DepartmentList} >

                </Route>

            </BrowserRouter >
        )
    }


}