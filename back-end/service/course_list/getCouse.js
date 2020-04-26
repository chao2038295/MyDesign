const courseSchema = require('../../modules/course_list/courseSchema')

const courseObj = Object.create(null)

courseObj.findList = async match => {
  return courseSchema.find(match)
}

module.exports = courseObj