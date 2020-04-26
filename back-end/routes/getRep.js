const express = require('express')
const router = express.Router()

const getRep = require('../service/report_list/getRep')

router.get('/getRep', async (req,res,next) => {
  let result = await getRep.getRep({})

  return res.json({
    state:200,
    result
  })
})

module.exports = router