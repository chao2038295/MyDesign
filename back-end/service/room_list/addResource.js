module.exports={
  add:function(roomDemo,w_time,name,course_id,course_teacher,weekly_time){
              roomDemo.week_1[w_time].class_name = name
              roomDemo.week_1[w_time].class_id = course_id
              roomDemo.week_1[w_time].class_teacher = course_teacher
              roomDemo.week_1[w_time].class_week = weekly_time
  }
}