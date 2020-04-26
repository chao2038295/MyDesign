const mongoose = require('./db')
const Schema = mongoose.Schema

const qwe = new Schema({
  "q_age":Number
})

const csd = new Schema({
  "cs_id":String,
  "cs_age":Number,
  "cs_name":String,
  "cs_arr":[qwe]

})

const ceshiSchema = new Schema({
  "ceshi_id":String,
  "ceshi_con":[csd]

})

module.exports = mongoose.model('ceshi',ceshiSchema,'ceshi')