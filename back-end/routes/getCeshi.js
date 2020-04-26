const express = require('express')
const router  = express.Router()

router.get('/getceshi/:anything', function(req,res,next){
  console.log(req.query)
  // res.send('anything is : ' + req.params.anything );
  return res.json({
    anything : req.params.anything,
    id:req.query.id
  })
  // JSON.stringify(req)
  // res.send(JSON.parse(JSON.stringify(req)))
})

module.exports = router