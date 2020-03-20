import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import CustomersList from './customers/List.js'
import CustomerNew from './customers/New.js'
import DepartmentList from './departments/List.js'
import EmployeeList from './employees/List.js'
import EmployeeNew from './employees/New.js'




export default class Home extends React.Component {


    render() {
        return (


            <BrowserRouter>
                <h1>Ticket Master </h1>
                <Link to="/">Home</Link>
                <Link to="/Customers">Customers</Link>
                <Link to="/Departments">Departments</Link>
                <Link to="/Employees">Employees</Link>
                <Route path="/" />

                <Route path="/Customers" component={CustomersList} exact={true} />

                <Route path="/Customers/new" component={CustomerNew} />

                <Route path="/Departments" component={DepartmentList} />

                <Route path="/Employees" component={EmployeeList} exact={true} />

                <Route path="/Employees/new" component={EmployeeNew} />



            </BrowserRouter >
        )
    }


}