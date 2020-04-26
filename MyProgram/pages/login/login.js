// pages/login/login.js
import request from '../../service/network'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    userPwd:'',
    selectId:false,
    selectPwd:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addId(event){
    // console.log(event)
    this.data.userId = event.detail.value
    this.setData({
      selectId:!this.data.selectId
    })
  },
  addPwd(event){
    // console.log(event)
    this.data.userPwd = event.detail.value
    this.setData({
      selectPwd:!this.data.selectPwd
    })
  },
  login(){
   if (this.data.userPwd!='' && this.data.userId!='') {
     request({
       url:'/login',
       method:'post',
       data:{
         userId:this.data.userId,
         userPwd:this.data.userPwd
       }
     }).then(res =>{
      //  console.log(res)
       if (res.data.status == 200) {
        app.globalData.userId = this.data.userId
        app.globalData.userClassId = res.data.result[0].stu_classId
        app.globalData.userDepId = res.data.result[0].stu_depId
        // console.log(app.globalData.userClassId,"++++++++++++"+app.globalData.userDepId)
        wx.switchTab({
          url: '../userInfo/userInfo'
        })
       }else{
        wx.showModal({
          title: '登录失败',
          content: '请输入正确的学号和密码',
          showCancel:false
        })
       }
     }).catch(err =>{
       
        wx.showToast({
          title: '与服务器连接失败',
          icon:'none'
        })
       
     })
   }else{
     wx.showModal({
       title: '登录失败',
       content: '请输入正确的学号和密码',
       showCancel:false
     })
   }
  },
  chooseId(){
    this.setData({
      selectId:!this.data.selectId
    })
  },
  choosePwd(){
    this.setData({
      selectPwd:!this.data.selectPwd
    })
  }
})