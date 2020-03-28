const Employee = require('../models/employee.js')

// list
module.exports.list = (req, res) => {
    Employee.find()
        .then(employee => {
            res.json(employee)
        })
        .catch(err => {
            console.log(err)
        })
}

// create
module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)
    // const note = new Note(body)
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

// show
module.exports.show = (req, res) => {
    id = req.params.id
    Employee.findById(id)
        .then(employee => {
            if (employee) {
                // note will be either object or null value 
                // checks to see if the note is present in the db
                res.json(employee) //sends the note 

            } else { //send an empty object 
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

// destroy
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
        .then(employee => {
            if (employee) {

                res.json(employee)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

// update 
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id, body, { new: true,runValidators:true })
        .then( employee =>{
            if (employee){
                res.json(employee)
            }else{
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

