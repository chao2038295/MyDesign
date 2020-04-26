const mongoose = require('../db')
const Schema = mongoose.Schema
const stuSchema = new Schema({
  "stu_name":String,
  "stu_age":Number,
  "stu_id":String,
  "stu_classId":String,
  "stu_className":String,
  "stu_depId":String,
  "stu_depName":String,
  "stu_key":String
})

module.exports = mongoose.model('student',stuSchema,'students')