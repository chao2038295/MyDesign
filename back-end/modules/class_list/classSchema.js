const mongoose = require('../db')
const Schema = mongoose.Schema

const classSchema = new Schema({
  "class_name":String,
  "class_id":String,
  "class_dep":String
})

module.exports = mongoose.model('class_list',classSchema,'class_list') 