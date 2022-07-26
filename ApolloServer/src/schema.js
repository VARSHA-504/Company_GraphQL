const { gql } = require("apollo-server");

exports.typeDefs = gql`

type Query {
  hello: String
}

type admin{
  fullName : String
  email : String
  password : String
  phone : Int
  
}

input adminSignup{
  fullName : String
  email : String
  password : String
  phone : Int
  
}

type signupMessage{
  msg : String
}

input adminLogin{
  email : String
  password : String
  
}

type loginMessage{
  msg : String
  token : ID
}

type Employees{
  id : ID
  empName: String
  empId : ID
  salary : Int
  role : String

}

input Employee{
  empName: String
  empId : ID
  salary : Int
  role : String

}

type empMessage {
  msg : String
  employees : Employees
}

type Query {
  getEmployees :[Employees]
}



type Mutation {
  adminSignup(admininfo: adminSignup) : signupMessage
  adminLogin(admininfo : adminLogin) : loginMessage
  addEmployee(empInfo : Employee) : empMessage
  deleteEmployee(id: ID): empMessage
  updateEmployee(id: ID , empInfo: Employee): empMessage
}
`;

