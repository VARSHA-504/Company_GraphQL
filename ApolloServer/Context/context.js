const jwt_decode = require('jwt-decode');
const jwt = require("jsonwebtoken");
const adminSchema = require("../../Models/adminSchema");


module.exports  = async ({ req }) => {

     let status =  jwt.verify(req.headers.authorization, process.env.SECRET_KEY,function(err,decoded){
          if(err) {
               return "Error"
          }
          return "Valid"
     });
     if(status == "Valid") {
     let token = req.headers.authorization
    let decoded = await jwt_decode(token);
    console.log(decoded)
    return decoded
     }
}
     
