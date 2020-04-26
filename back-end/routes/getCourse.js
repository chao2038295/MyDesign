var express = require('express');
var router = express.Router();

const courseList = require('../service/course_list/getCouse')

router.get('/getCourse',async function(req,res,next){
  let list = await courseList.findList()
  let result = list 
  return res.json({
    status:200,
    result
  })
})



module.exports = router;