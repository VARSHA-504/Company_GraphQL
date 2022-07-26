const employeeSchema = require("../../../Models/employeeSchema")
const adminSchema = require("../../../Models/adminSchema")

 exports.addEmployee= async (_, args, context, {}) => {
  const obj = adminSchema.find({ email: context.email })
  
  if (obj.length === 0) {
      return "null"
      }
      else{
      const { empName, empId, salary ,role} = args.empInfo
      const emp = new employeeSchema({ empName, empId, salary ,role})
    await emp.save()
  
    return {
      msg: "Registered Successfully"
    };
  }
 }

 exports.deleteEmployee= async (_, args, context, {}) => {
  const obj = adminSchema.find({ email: context.email })
  
  if (obj.length === 0) {
      return "null"
      }
      else{
      const { id } = args.empInfo
            await Post.findByIdAndDelete(id);
  
    return {
      msg: 'Employee deleted !!'
    };
  }
 }

 exports.updateEmployee= async (_, args, context, {}) => {
  const obj = adminSchema.find({ email: context.email })
  
  if (obj.length === 0) {
      return "null"
      }
      else{
      const {id} = args
            const { empName, empId, salary ,role} = args.empInfo;
            const post =  await employeeSchema.findByIdAndUpdate(
                id,
                {empName, empId, salary ,role},
                {new: true}
            )
  
    return {
      msg: "Employee details updated"
    };
  }
 }

 