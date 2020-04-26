const express = require('express');
const router = express.Router();

const examList = require('../service/exam_list/getExamList')

router.get('/getExam',async function(req, res, next) {

  let exam_depId = req.query.exam_depId
  let exam_depclass = req.query.exam_depclass
  let examL = await examList.findExam({$and:[{exam_dep:exam_depId},{exam_class:exam_depclass}]})
  console.log(examL[0].exam_content)

  let list = examL[0].exam_content

  for(let i = 0;i<3;i++){
    list.push(list[0])
  }
  if(examL!=''){
    return res.json({
      status:200,
      // result: examL[0].exam_content 
      result:list
    })
  }else{
    return res.json({
      status:204,
      result:"数据请求无效"
    })
  }
});

module.exports = router;

