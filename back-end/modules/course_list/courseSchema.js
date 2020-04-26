const mongoose = require('../db')

const Schema = mongoose.Schema
const whatTime = new Schema({
  "w_time":Number,
  "w_week":Number  //建议输入数字不超过5个,且数字不大于5
})
const courseList = new Schema({
  "course_id" : String, 
  "name":String,
  "weekly_time": [Number],  //建议只输入2个数字如 [1,15]
  "course_time":[whatTime], 
  "course_teacher":String,
  "course_room":String
})

const courseSchema = new Schema({
  "list_id":Number,
  "list":[courseList]
})

module.exports = mongoose.model('courseSchema',courseSchema,'course_list')