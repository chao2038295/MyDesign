const classSchema = require('../modules/class_list/classSchema')
const depList = require('../modules/department_list/depSchema')

const depObj = Object.create(null)



depObj.findDep = async match =>{
  return await depList.find(match).populate('dep_class.dep_classId')

//  .exec(function(err,docs){
//   console.log(JSON.stringify(docs))
//   return docs
// })

    // console.log("++++++a+++"+a)
  
}

module.exports = depObj