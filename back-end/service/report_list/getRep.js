const repSchema = require('../../modules/report_list/report_list')
const repObj = Object.create(null)

repObj.getRep = async match =>{
  
  // let a = new repSchema({
  //   "class_id":"1002",
  //   "list":[
  //     {
  //       "stu_name":"王麻子",
  //       "stu_id":"1603403",
  //       "高等数学考试":90,
  //       "JAVA":90
  //     }
  //   ]
  // })

  // a.save()



  return await repSchema.find(match)
}

module.exports = repObj