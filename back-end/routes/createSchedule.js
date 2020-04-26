var express = require('express');
var router = express.Router();

const Course = require('../service/weel_list/getCoureList.js')
const CSchedule = require('../service/weel_list/createSchedule')
/* GET home page. */
router.get('/createSchedule',async function(req, res, next) {

  const courceData = req.body.data;
  const week = await Course.findCourse({"list_id":1002})
  // week[0],是因为find传出的是一个数组对象
  // console.log(week[0].list)
  // console.log(week[0].course_time.w_time)
  const change = CSchedule.addResource(week[0].list,1002)
  if(change){
    return res.json({
      status:200,
      week
    })
  }
});

module.exports = router;

