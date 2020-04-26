const express = require('express')
const  router = express.Router()
const getlist = require('../service/room_list/getRoom')
const useData = require('../service/room_list/useData')

router.get('/getRoomList',async (req,res,next) => {
  let weekTime = req.query.weekTime *1
  let weekly = req.query.weekly *1 
  let classTime = req.query.classTime *1
  // let weekTime = 1
  // let weekly = 1
  // let classTime = 2

  console.log(weekTime , weekly , classTime)
  

  let result = await useData.handleData(weekTime , weekly , classTime )
  return res.json({
    state:200,
    result
  })
})

module.exports = router