// pages/schedule/schedule.js
import request from '../../service/network'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置当前周次
    week:0,
    //存放请求过来的总课表
    schedule:[],
    //设置当前周次的课表用来渲染页面
    nowWeek:[],
    timeList:['第一节','第二节','第三节','第四节','第五节'],
    weekList:['星期一','星期二','星期三','星期四','星期五','星期六','星期天']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'/getSchedule',
      data:{
        userDepId:app.globalData.userClassId
        // userDepId: 1001

      }
    }).then(res=>{
      this.setData({
        schedule:res.data.result
      })

      let nowData = this.data.schedule[0].schedule_week
      this.setData({
      nowWeek:nowData
    })
    })

    
  },
  getWeek(e){
    this.data.week = e.detail.value * 1
  },
  getWeekList(){
    
    if (this.data.week>=1 && this.data.week <= 20) {
      let nowData = this.data.schedule[this.data.week - 1].schedule_week
      this.setData({
      nowWeek:nowData
    })
    }else{
      wx.showToast({
        title: '输入内容有误',
        image:'../../assets/111.png',
        mask:true,
        duration: 2000
      })
    }
    
  }
})