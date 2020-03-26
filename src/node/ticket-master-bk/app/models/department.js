const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a categories Schema - with fields like name of type string and required true

const departmentSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})


//Create a model called as Category
const Department = mongoose.model('Department',departmentSchema) 

module.exports = Department