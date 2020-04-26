const Schedule = require('../../modules/schedule/schedule')

const scheduleObj = Object.create(null)

scheduleObj.addResource = async (createResource , numb) => {
  try {
    let schList =[]

    // console.log("-----------",createResource[0].course_time[0].w_week)
    for(let i=1;i <= 20;i++){
      schList[i-1]={
        "schedule_time":i
      }
      schList[i-1].schedule_week=[]
      for(let x=1;x<=7;x++){
        schList[i-1].schedule_week[x-1]={
          "week":x,
        }
        schList[i-1].schedule_week[x-1].schedule_course=[]

        for(let ins = 0;ins < 5 ;ins++){
          schList[i-1].schedule_week[x-1].schedule_course[ins]={}
        }
      }
    }

    for(let i=0;i < createResource.length ; i++){
      // console.log("^^^^^^^",i)
      let s_time_end = createResource[i].weekly_time[1]
      let s_time_start = createResource[i].weekly_time[0]
      // console.log(s_time_end +"&&&&&&&&&"+s_time_start)

      // for(let y = 0;y<createResource[i].course_time.length;y++){

      for(let x = s_time_start;x<=s_time_end;x++){
        // console.log("----",x)
        for(let y = 0;y<createResource[i].course_time.length;y++){
            // console.log("@@@@",y)
            let c_week = createResource[i].course_time[y].w_week
            let c_time = createResource[i].course_time[y].w_time
            let c_name = createResource[i].name
            let c_teacher = createResource[i].course_teacher
            let c_room = createResource[i].course_room

            schList[x-1].schedule_week[c_week-1].schedule_course[c_time-1].course_time = c_time
            schList[x-1].schedule_week[c_week-1].schedule_course[c_time-1].course_name = c_name
            schList[x-1].schedule_week[c_week-1].schedule_course[c_time-1].course_teacher = c_teacher
            schList[x-1].schedule_week[c_week-1].schedule_course[c_time-1].class_room = c_room

          }

      }
      
      
          
      // console.log(createResource[y].weekly_time) 
      // if(i>=createResource[y-1].weekly_time[0] && i <= createResource[y-1].weekly_time[1]){

      //   for(let z=0;z<=createResource[y-1].course_time.length;z++){
          
          
      //   }
        
        // for(let z=0;z<=createResource[y-1].course_time.length;z++){
        //   // console.log("++++++++",createResource[y-1].course_time[z].w_week)
        //   schList[i-1].schedule_week[x-1].schedule_course[i]={}
        //   if(x === createResource[y-1].course_time[z].w_week){
        //     let s_time =createResource[y-1].course_time[z].w_time
        //     let s_name = createResource[y-1].name
        //     let s_teacher = createResource[y-1].course_teacher
        //     let s_room = createResource[y-1].course_room
        //     schList[i-1].schedule_week[x-1].schedule_course[s_time].name = s_name
        //     schList[i-1].schedule_week[x-1].schedule_course[s_time].course_teacher = s_teacher
        //     schList[i-1].schedule_week[x-1].schedule_course[s_time].course_room = s_room
        //   }
        // }
      }
    
    

    console.log("======",JSON.stringify(schList[0].schedule_week))

    let result = {
      "schedule_id":numb,
      "schedule_list":schList
    }
    
    // return await Schedule.create(result)
    return null
  } catch (err){
    console.log(err)
  }
}



module.exports = scheduleObj