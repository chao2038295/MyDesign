const express = require('express')
const router  = express.Router()

const ceshi = require('../service/ceshi')

router.get('/ceshi',async function(req,res,next){
  let a= await ceshi.change()
  return res.json(a)
})

module.exports = router