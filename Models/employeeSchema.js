let mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    empName: {
        type: String,
        required: true
    },
    empId: {
        type: String,
        required: true
    },
    salary: { 
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("employee", employeeSchema)