const employeeSchema = require ("../../Models/employeeSchema")
const adminSchema = require ("../../Models/adminSchema")

exports.getEmployees = async (_, {}, context) => {

        const obj = adminSchema.find({ email: context.email })
        console.log(context)
        
        if (obj.length === 0) {
            return "null"
            }
            else{

                const employees = await employeeSchema.find();
                return employees
            }
        }



    