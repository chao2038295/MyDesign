const courseList = require('../../modules/course_list/courseSchema')

const courseObj = Object.create(null)

courseObj.findCourse = async (match) => {
  return await courseList.find(match)
}

module.exports = courseObj