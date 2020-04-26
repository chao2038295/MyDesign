const examSchema = require('../../modules/exam_list/exam_list')
const examObj = Object.create(null)

examObj.findExam = async match => {
//  let a = new examSchema({
//     "exam_dep":"1024",
//     "exam_class":"1001",
//     "exam_content":[
//       {
//         "exam_name": "高等数学考试",
//         "exam_room": "A300",
//         "exam_weekTime": 10,
//         "exam_week": 6,
//         "exam_time": "18:00-20:00",
//       },
//       {
//         "exam_name": "JAVA",
//         "exam_room": "A100",
//         "exam_weekTime": 11,
//         "exam_week": 7,
//         "exam_time": "18:00-20:00",
//       },
//       {
//         "exam_name": "JAVA",
//         "exam_room": "A200",
//         "exam_weekTime": 10,
//         "exam_week": 6,
//         "exam_time": "18:00-20:00",
//       }
//     ]
//   })

  // a.save()
  return await examSchema.find(match)
  // return null
  
}

module.exports = examObj