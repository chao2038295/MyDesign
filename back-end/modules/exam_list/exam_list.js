const mongoose = require('../db')
const Schema = mongoose.Schema


const examContent = new Schema({
  
  "exam_name":String,
  "exam_room":String,
  "exam_weekTime":Number, //放置考试周次
  "exam_week":Number, //星期几
  "exam_time":String

})

const examList = new Schema({
  "exam_class":String,
  "exam_dep":String,
  "exam_content":[examContent]
})

module.exports = mongoose.model('exam_list',examList,'exam_list')