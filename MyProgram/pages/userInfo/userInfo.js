// pages/userInfo/userInfo.js

import request from '../../service/network'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'/getStuList',
      data:{
        userId:app.globalData.userId
      }
    }).then(res=>{
      this.setData({
        userInfo:res.data.result[0]
      })
    })
  },

 
})