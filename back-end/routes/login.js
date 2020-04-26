const express = require('express')
const router = express.Router()

const getStuList = require('../service/students/getStu')

router.post('/login', async (req,res,next) => {
  console.log("被访问了")
  // console.log(res.)
  let userId = req.body.userId
  let userPwd = req.body.userPwd
  // let result = req.body
  let result = await getStuList.getStu({stu_id:userId})
  // console.log(result)
  if(result!='' && result[0].stu_key == userPwd){
    return res.json({
      status:200,
      result
     // userId,
     // userPwd
    })
  }else{
    return res.json({
      status:401,
      result:"身份验证错误"
    })
  }
   

})

module.exports = router