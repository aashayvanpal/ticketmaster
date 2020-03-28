const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/customerController.js')
const departmentController = require('../app/controllers/departmentController.js')
const employeeController = require('../app/controllers/employeeController.js')

// for customers 
router.get('/customers', customerController.list)
router.get('/customers/:id', customerController.show)
router.post('/customers', customerController.create)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.destroy)


// for departments 
router.get('/departments', departmentController.list)
router.get('/departments/:id', departmentController.show)
router.post('/departments', departmentController.create)
router.put('/departments/:id', departmentController.update)
router.delete('/departments/:id', departmentController.destroy)


// for employees
router.get('/employees', employeeController.list)
router.get('/employees/:id', employeeController.show)
router.post('/employees', employeeController.create)
router.put('/employees/:id', employeeController.update)
router.delete('/employees/:id', employeeController.destroy)


module.exports = router