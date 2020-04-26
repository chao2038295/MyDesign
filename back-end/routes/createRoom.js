const express = require('express')
const router = express.Router()
const cRoom = require('../service/room_list/craeteRoom')

router.get('/createRoom',async (req,res,next)=>{
 let result= await cRoom.createRoom()

  return  res.json({
    "name":123,
    result
  })
})

module.exports = router