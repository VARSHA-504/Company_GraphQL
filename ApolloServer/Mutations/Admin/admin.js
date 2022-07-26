const adminSchema = require("../../../Models/adminSchema")
const jwt = require("jsonwebtoken");
require("dotenv").config();


    exports.adminSignup= async (_, args, {}, {}) => {
        const { fullName, email, password, phone} = args.admininfo
        const admin = new adminSchema({ fullName, email, password, phone})
      await admin.save()
     
      return {
        msg: "Registered Successfully",
      };
    }

    exports.adminLogin= async (_, args, {}, {}) =>{
            const {email , password} = args.admininfo

            let obj = await adminSchema.find({ email: email , password : password});
            if (obj.length == 1) {
                console.log(obj[0].email)
                let loginToken = jwt.sign({ email : obj[0].email, password: obj[0].password }, `${process.env.SECRET_KEY}`);
                console.log(loginToken)
                return {
                    msg: "Logged In Successfully",
                    token : loginToken
                   
                };
            } 
            else {
                return {
                    msg: "Account doesnt exits"
                
                }
            } ;

        }
        