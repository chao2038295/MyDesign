const roomSchema = require('../../modules/room_list/room_list')
const roomObj = Object.create(null)
const courseList = require('../course_list/getCouse')


roomObj.createRoom = async function(){
  //获取 course_list 的内容
  const resource = await courseList.findList()

  let roomL = ["A100","A200","A300"]
  let ceshi=[]
  let count=0
  for(let i = 0 ; i< roomL.length ; i++){
   
    //手动给生成一个 对象 ， 其结构我们按照 roomSchema 的结构创建
    //这里不能同意使用一个数组否则会出现改变一条，其他的跟着以前改变的情况
    ceshi[i] = {
      
      "room_name":roomL[i]
    }
    ceshi[i].week_1=[]
    ceshi[i].week_2=[]
    ceshi[i].week_3=[]
    ceshi[i].week_4=[]
    ceshi[i].week_5=[]
    ceshi[i].week_6=[]
    ceshi[i].week_7=[]
    for(let q=1;q<=5;q++){
      ceshi[i].week_1[q-1]={
        "class_time":q
      }
      ceshi[i].week_2[q-1]={
        "class_time":q
      }
      ceshi[i].week_3[q-1]={
        "class_time":q
      }
      ceshi[i].week_4[q-1]={
        "class_time":q
      }
      ceshi[i].week_5[q-1]={
        "class_time":q
      }
      ceshi[i].week_6[q-1]={
        "class_time":q
      }
      ceshi[i].week_7[q-1]={
        "class_time":q
      }
    }


    //先向数据库中存入
    for(let x=0;x<resource.length;x++){
    
      let list_id = resource[x].list_id
  
      for(let y=0;y<resource[x].list.length;y++){
        
        //获取course_list 中我们所需要的数据
        let weekly_time = resource[x].list[y].weekly_time
        let course_id = resource[x].list[y].course_id
        let name = resource[x].list[y].name
        let course_teacher = resource[x].list[y].course_teacher
        let course_room = resource[x].list[y].course_room

        //只有当前的课程对应的班级名字 符合的时候才会进行插入操作
        if(course_room == roomL[i]){

          //通过遍历其内部的数据获得 w_time 和 w_week 的内容，从而确定 在第几周的第几节课插入数据
          for(let z =0;z<resource[x].list[y].course_time.length;z++){

            let w_time = resource[x].list[y].course_time[z].w_time-1
            let w_week = resource[x].list[y].course_time[z].w_week
            
            switch(w_week){
              case 1:
                // addResource.addRe(roomDemo,"week_1",w_time,name,list_id,course_teacher,weekly_time)
                
                ceshi[i].week_1[w_time].class_name= name
                ceshi[i].week_1[w_time].class_id = list_id
                ceshi[i].week_1[w_time].class_teacher = course_teacher
                ceshi[i].week_1[w_time].class_week = weekly_time
                
                break
               
              case 2:
                // addResource.addRe(roomDemo,"week_2",w_time,name,list_id,course_teacher,weekly_time)
         
                ceshi[i].week_2[w_time].class_name = name
                ceshi[i].week_2[w_time].class_id = list_id
                ceshi[i].week_2[w_time].class_teacher = course_teacher
                ceshi[i].week_2[w_time].class_week = weekly_time
                
                break
              case 3:
                // addResource.addRe(roomDemo,w_time,name,list_id,course_teacher,weekly_time)
                ceshi[i].week_3[w_time].class_name = name
                ceshi[i].week_3[w_time].class_id = list_id
                ceshi[i].week_3[w_time].class_teacher = course_teacher
                ceshi[i].week_3[w_time].class_week = weekly_time
              
                break
              case 4:
                
                // addResource.addRe(roomDemo,w_time,name,list_id,course_teacher,weekly_time)
                ceshi[i].week_4[w_time].class_name = name
                ceshi[i].week_4[w_time].class_id = list_id
                ceshi[i].week_4[w_time].class_teacher = course_teacher
                ceshi[i].week_4[w_time].class_week = weekly_time
               
                break
              case 5:
                // addResource.addRe(roomDemo,w_time,name,list_id,course_teacher,weekly_time)
                ceshi[i].week_5[w_time].class_name = name
                ceshi[i].week_5[w_time].class_id = list_id
                ceshi[i].week_5[w_time].class_teacher = course_teacher
                ceshi[i].week_5[w_time].class_week = weekly_time
           
                break
              case 6:
                // addResource.addRe(roomDemo,w_time,name,list_id,course_teacher,weekly_time)
                ceshi[i].week_6[w_time].class_name = name
                ceshi[i].week_6[w_time].class_id = list_id
                ceshi[i].week_6[w_time].class_teacher = course_teacher
                ceshi[i].week_6[w_time].class_week = weekly_time
       
                break
              case 7:
                // addResource.addRe(roomDemo,w_time,name,list_id,course_teacher,weekly_time)
                ceshi[i].week_7[w_time].class_name = name
                ceshi[i].week_7[w_time].class_id = list_id
                ceshi[i].week_7[w_time].class_teacher = course_teacher
                ceshi[i].week_7[w_time].class_week = weekly_time
 
                break
              default:
                break
            }


            // break

          }

        }

      }
    }

    
    //需要在数据库中创建的时候打开这步操作
    // roomSchema.create(ceshi[i])
  }

  
  // ceshi[0].week_1[0].sd=123

  return ceshi
  
}

module.exports = roomObj