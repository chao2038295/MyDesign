const Schedule = require('../../modules/schedule/schedule')
const examSchedule = Object.create(null)

examSchedule.createExam = async (createResource) =>{

  if(createResource){

    for(let i = 0 ;i < createResource.length ;i++){

      let eClass= createResource[i].exam_class * 1


      const cData = createResource[i].exam_content
      for(let x =0;x<cData.length;x++){
        // for(let x =0;x<1;x++){

        // console.log(i)
        let weekTime= cData[x].exam_weekTime*1
        let week = cData[x].exam_week*1

        let name = cData[x].exam_name
        let room = cData[x].exam_room
        let time = cData[x].exam_time
        // console.log(weekTime+'```````'+week+'```````'+name+'```````'+room+'```````'+time)

        Schedule.updateOne({ $and:[{"schedule_id":eClass} , {"schedule_list.schedule_time":weekTime}] },{
          $push:{
            "schedule_list.$.exam_content":{
              "exam_name":name,
              "exam_room":room,
              "exam_time":time,
              "exam_week":week
            }
          }
        }).then(docs =>{
          console.log(docs)
        })
        

      }
  }
    
  }else{

  }




  return  createResource
}

module.exports = examSchedule