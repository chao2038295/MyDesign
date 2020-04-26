var express = require('express');
var router = express.Router();

/* GET users listing. */
const getSchedule = require('../service/weel_list/getSchedule')

/* GET users listing. */
router.get('/getSchedule',async function(req, res, next) {
  let id=req.query.userDepId * 1
  const stu_schedule = await getSchedule.findSchedule({"schedule_id":id})
  // console.log(stu_schedule)
  // console.log(stu_schedule)
  const result = stu_schedule[0].schedule_list
  if(result){
    return res.json({
      status:200,
      result
    })
  }
});

module.exports = router;