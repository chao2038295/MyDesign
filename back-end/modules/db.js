const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/MyDemo',{ useNewUrlParser: true , useUnifiedTopology: true  })
const db=mongoose.connection;

db.on('error',function(error){
  console.log('数据库链接失败:'+ error)
})
db.on('open',()=>{
  console.log("数据库已链接成功：MyDemo")
  
})

module.exports = mongoose