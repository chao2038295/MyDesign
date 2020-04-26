const mongoose = require('../db')
const Schema = mongoose.Schema


const depClassSchema = new Schema({
  "class_id":String,
  "dep_classId":{
    type:Schema.ObjectId,
    ref:'class_list'
  }
})

const depSchema = new Schema({
  "dep_name":String,
  "dep_id":String,
  "dep_class":[depClassSchema]
})

// const depSchema = new Schema({
//   "class_id":String,
//   "dep_classId":{
//     type:Schema.Types.ObjectId,
//     ref:"class_list"
//   }
// })


module.exports = mongoose.model('dep_list',depSchema,'department_list')