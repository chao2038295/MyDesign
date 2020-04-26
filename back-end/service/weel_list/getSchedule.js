const schedule = require('../../modules/schedule/schedule')

const scheduleObj = Object.create(null)

scheduleObj.findSchedule = async (match) => {
  return await schedule.find(match,{_id:0})
}

module.exports = scheduleObj