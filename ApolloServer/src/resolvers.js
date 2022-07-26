
const { hello } = require("../Queries/admin");
const { adminSignup} = require ("../Mutations/Admin/admin")
const { adminLogin} = require ("../Mutations/Admin/admin")
const {addEmployee} = require ("../Mutations/Employee/employee")
const {getEmployees}= require ("../Queries/employee")
const {updateEmployee} = require ("../Mutations/Employee/employee")
const {deleteEmployee} = require ("../Mutations/Employee/employee")

exports.resolvers = {

    Query: {
        hello,
        getEmployees
        },

    Mutation: {
        adminSignup,
        adminLogin,
        addEmployee,
        updateEmployee,
        deleteEmployee
    }
}
    
