const ceshiSchema = require('../modules/ceshi')

const ceshiObjd = Object.create(null)

ceshiObjd.change  =async function (){
  // let a = new ceshiSchema({
  //   "ceshi_id":"001",
  //   "ceshi_con":[
  //     {
  //       "cs_id":"100",
  //       "cs_age":20
  //     }
  //   ]
  // })

  // a.save()
  // let sd = "001"
  // let a = await ceshiSchema.find({"ceshi_id":sd},(err,docs)=>{
  //   console.log(docs)
  // })
  
  

  // let b =  ceshiSchema.updateOne({"ceshi_id":"001"},{
  //   $set:{
  //     "ceshi_con.$.cs_arr":{
  //       "q_age":456
  //     }
  //   }
  // }).then((docs)=>{
  //   console.log(docs)
  // })
  // console.log(a)

  // let b = await ceshiSchema.updateOne({"ceshi_con._id":"5e7dc0b108a6e35fc426c78f"},{
  //   $set:{
  //     "ceshi_con.$.cs_id":"333"
  //   }
  // }
  //   ).then((docs)=>{
  //     console.log(docs)
  //   })

  return 23;
}



module.exports = ceshiObjd