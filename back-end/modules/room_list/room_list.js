const mongoose = require('../db')
const Schema = mongoose.Schema

const classCon = new Schema({
  "class_time":Number,
  "class_name":String,
  "class_week":[Number],
  "class_teacher":String,
  "class_id":Number
})

const roomList = new Schema({
  "room_name":String,
  "week_1":[classCon],
  "week_2":[classCon],
  "week_3":[classCon],
  "week_4":[classCon],
  "week_5":[classCon],
  "week_6":[classCon],
  "week_7":[classCon],
})


module.exports = mongoose.model('room_list',roomList,'room_list')