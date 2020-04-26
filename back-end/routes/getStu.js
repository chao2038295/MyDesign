const express = require('express')
const router = express.Router()

const getStuList = require('../service/students/getStu')

router.get('/getStuList', async (req,res,next) => {
  
  let userId = req.query.userId
  console.log(userId)
   let result = await getStuList.getStu({stu_id:userId})

   return res.json({
     status:200,
     result
   })

})

module.exports = router