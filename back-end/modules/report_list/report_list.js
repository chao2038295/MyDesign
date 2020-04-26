const mongoose = require('../db')
const Schema = mongoose.Schema


const conSchema = new Schema({
  "stu_name":String,
  "stu_id":String,
  "高等数学考试":Number,
  "JAVA":Number,
  // "_id":false

})

const repSchema = new Schema({
  "class_id":String,
  "list":[conSchema]

})

module.exports = mongoose.model('report_list',repSchema,'report_list')