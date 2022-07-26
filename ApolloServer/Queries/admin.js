const adminSchema = require("../../Models/adminSchema")

exports.hello =(parent, args, context, {}) => {
        console.log(context.email)
        let obj = adminSchema.find({ email: context.email })
        
        if (obj.length === 0) {
            
                return "____-"
            }
            else {
                return " hello world"
            }
        }
