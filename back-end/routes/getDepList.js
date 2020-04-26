const express = require('express');
const router = express.Router();

/* GET users listing. */
const getSchedule = require('../service/weel_list/getSchedule')

const depList = require('../service/getDep')

/* GET users listing. */
router.get('/getDepList',async function(req, res, next) {
  const list = await depList.findDep()
  // console.log(stu_schedule)
  // console.log("------------",list)
  const result = list
  if(result){
    return res.json({
      status:200,
      result: result
    })
  } 
});

module.exports = router;