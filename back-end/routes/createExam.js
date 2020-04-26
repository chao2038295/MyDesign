const express = require('express');
const router = express.Router();

const examList = require('../service/exam_list/getExamList')
const cExamelist = require('../service/exam_list/createExam')

router.get('/createExam',async function(req, res, next) {

  // const courceData = req.body.data;
  let examL = await examList.findExam({})
  // examL = JSON.stringify(examL)

  //根据考试列表在课程表中创建考试的周的信息
  // const result = cExamelist.createExam(examL)
  // console.log("``````````"+result)
  if(examL){
    return res.json({
      status:200,
      examL
    })
  }
});

module.exports = router;

