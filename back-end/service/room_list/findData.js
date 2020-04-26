const obj = Object.create(null)

 obj.findData = function (data,weekTime,weekly,classTime) {
  console.log("findData内容")
  switch (weekly){
    case 1:
      console.log("这里是周一的课程")
      // console.log(data.week_1[classTime-1].class_week)
      if(data.week_1[classTime-1].class_week && data.week_1[classTime-1].calss_week!=[]){
        console.log(data.week_1[classTime-1].class_week[1])
        if(data.week_1[classTime-1].class_week[1] > weekTime){
          // console.log("返回了错误")
          return false
        }else{
          return true
        }
      }else{
        return true
      }
     
     break
    case 2:
      // console.log("这里是周二的课程")
      
      if(data.week_2[classTime-1].class_week && data.week_2[classTime-1].calss_week!=''){
        if( data.week_2[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      
      break

    case 3:
      if(data.week_3[classTime-1].class_week && data.week_3[classTime-1].calss_week!=''){
        if( data.week_3[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
     
      break


    case 4:
      if(data.week_4[classTime-1].class_week && data.week_4[classTime-1].calss_week!=''){
        if( data.week_4[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      break

    case 5:
      if(data.week_5[classTime-1].class_week && data.week_5[classTime-1].calss_week!=''){
        if( data.week_5[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      break

    case 6:
      if(data.week_6[classTime-1].class_week && data.week_6[classTime-1].calss_week!=''){
        if( data.week_6[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      break

    case 7:
      if(data.week_7[classTime-1].class_week && data.week_7[classTime-1].calss_week!=''){
        if( data.week_7[classTime-1].class_week[1]>weekTime){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
      break

    default:
      return false
      break

  }
}

module.exports = obj