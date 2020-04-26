const getRoom = require('./getRoom')
const rightData = Object.create(null)
const findData = require('./findData')

rightData.handleData = async function(weekTime , weekly , classTime ){
  let data = await getRoom.getRoom({})
  // console.log(data[0].week_1)
  let list = []
  
  for(let i =0; i<data.length;i++){
  // console.log(data[i].week_1)
  console.log("userData++++++++++++++++++++++")

    // console.log(data[i])
    if(findData.findData(data[i],weekTime,weekly,classTime)){
      list.push(data[i].room_name)
    }
  }

  return  list
}



module.exports = rightData