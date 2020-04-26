const stuSchema = require('../../modules/student_list/student_list')
const stuObj = Object.create(null)

stuObj.getStu = async match =>{

  return await stuSchema.find(match)

  // return await stuSchema.find(match,{"stu_key":0})
}

module.exports = stuObj