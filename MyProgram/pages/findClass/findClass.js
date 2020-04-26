// pages/findClass/findClass.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  //周次
   weekTime:'',
   // 星期几
   weekly:'',
   // 第几节课
   classTime:'',
   roomList:[],
   weekTimeText:'请输入内容',
   weekTimeTemp:null,
   weeklyText:'请输入内容',
   weeklyTemp:null,
   classTimeText:'请输入内容',
   classTimeTemp:null,

   showText:'请填写查询信息'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  findRoom(){
    if (
      this.data.weekTime !='' && !this.data.weekTimeTemp
      && this.data.weekly != '' && !this.data.weeklyTemp
      && this.data.classTime != '' && !this.data.classTimeTemp) {
      request({
        url:'/getRoomList',
        method:'get',
        data:{
          weekTime: this.data.weekTime,
          weekly: this.data.weekly,
          classTime: this.data.classTime
        }
      }).then(res=>{
        this.setData({
          roomList:res.data.result,
          showText:'当前查询结果'
        })
      })
    }else{
      this.setData({
          roomList:[],
          showText:'请填写查询信息'
      })
      wx.showToast({
        title: '输入内容有误',
        image:'../../assets/111.png',
        mask:true,
        duration: 2000
      })
    }
  },
  inWeekTime(e){
    if (e.detail.value>=1&&e.detail.value<=20) {
      this.data.weekTime = e.detail.value
      this.setData({
        weekTimeTemp:false,
        weekTimeText:'输入正确！'
      })
    }else{
      this.setData({
        weekTimeTemp:true,
        weekTimeText:'请输入正确的内容!'
      })
    }
  },
  inWeekly(e){
    if (e.detail.value>=1&&e.detail.value<=7) {
      this.data.weekly = e.detail.value
      this.setData({
        weeklyTemp:false,
        weeklyText:'输入正确！'
      })
    }else{
      this.setData({
        weeklyTemp:true,
        weeklyText:'请输入正确的内容!'
      })
    }
  },
  inClassTime(e){
    if (e.detail.value>=1&&e.detail.value<=5) {
      this.data.classTime = e.detail.value
      this.setData({
        classTimeTemp:false,
        classTimeText:'输入正确！'
      })
    }else{
      this.setData({
        classTimeTemp:true,
        classTimeText:'请输入正确的内容!'
      })
    }
  }
})