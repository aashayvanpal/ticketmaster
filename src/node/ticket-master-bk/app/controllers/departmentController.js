const Department = require('../models/department.js')

// list
module.exports.list = (req, res) => {
    Department.find()
        .then(department => {
            res.json(department)
        })
        .catch(err => {
            console.log(err)
        })
}

// create
module.exports.create = (req, res) => {
    const body = req.body
    const department = new Department(body)
    // const note = new Note(body)
    department.save()
        .then((department) => {
            res.json(department)
        })
        .catch((err) => {
            res.json(err)
        })
}


// show
module.exports.show = (req, res) => {
    id = req.params.id
    Department.findById(id)
        .then(department => {
            if (department) {
                // note will be either object or null value 
                // checks to see if the note is present in the db
                res.json(department) //sends the note 

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
    Department.findByIdAndDelete(id)
        .then(department => {
            if (department) {

                res.json(department)
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
    Department.findByIdAndUpdate(id, body, { new: true,runValidators:true })
        .then( department =>{
            if (department){
                res.json(department)
            }else{
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

