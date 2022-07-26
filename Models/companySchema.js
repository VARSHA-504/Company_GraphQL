let mongoose = require('mongoose')

let companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    revenue : {
        type: String,
        required: true
    },
    location: { 
        type: String,
        required: true,
    },
   
})

module.exports = mongoose.model("company", companySchema)