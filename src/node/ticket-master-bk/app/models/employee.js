const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Create a categories Schema - with fields like name of type string and required true

const employeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
        type:Schema.Types.ObjectId,
        ref:'Department'
    }
})


//Create a model called as Category
const Employee = mongoose.model('Employee',employeeSchema) 

module.exports = Employee