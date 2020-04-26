const roomSchema = require('../../modules/room_list/room_list')
const roomObj = Object.create(null)

roomObj.getRoom = async match => {
  return roomSchema.find(match)
}

module.exports = roomObj