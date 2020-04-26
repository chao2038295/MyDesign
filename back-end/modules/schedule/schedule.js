const mongoose = require('../db')
const Schema = mongoose.Schema

//若有考试的话，考试内容
const exam = new Schema({
  
  "exam_name":String,
  "exam_room":String,
  "exam_time":String,
  "exam_week":Number

})


//某一节单课
const todayCourse = new Schema({ 
  "course_time":Number,
  "class_room":String,
  "course_teacher":String,
  "course_name":String
})

const weekCourse = new Schema({
  "week":Number, //1-7星期数
  "schedule_course":[todayCourse], //当天的所有课程
})

const scheduleSchema = new Schema({
  "schedule_time":Number, //这里放置当前周次1-20
  "schedule_week":[weekCourse], //这里放置当前周次的星期几的全部课程1-7
  "exam_content":[exam]
})

const schedulelist = new Schema({
  "schedule_id": Number,
  "schedule_list":[scheduleSchema]
})

module.exports = mongoose.model('schedule',schedulelist,'schedule')