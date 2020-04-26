// pages/exam/exam.js
import request from '../../service/network'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    examList: [],
    temp:1,
    pageList:[],
    pageTemp:[1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: '/getExam',
      data: {
        exam_depId: app.globalData.userDepId,
        exam_depclass: app.globalData.userClassId
      }
    }).then(res => {
      let list = [] 
      this.setData({
        list:res.data.result
      })
      list.push(res.data.result[0])
      list.push(res.data.result[1])
      list.push(res.data.result[2])

      this.setData({
        examList: list,
       
      })
      let num =parseInt(res.data.result.length /3)
      if( num < res.data.result.length/3){
        num++
      }
      let pageList=[]
      for(let i =1 ; i<=num ; i++){
        pageList.push(i)
      }
      this.setData({
        pageList:pageList
      })

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(){

    let temp
    wx.getSystemInfo({
      //设置适配时的比例
      success: function(res) {
        temp = res.windowWidth/750
      }
    })
    const ctx = wx.createCanvasContext('firstCanvas')
    //设置画布内容
    ctx.setStrokeStyle("#2E2E2E")
    ctx.setLineWidth(1)
    ctx.setFillStyle("#F5F5DC")
    //画布画出一个纸张的形状，
    ctx.beginPath()
    //顶部线
    ctx.moveTo(120 * temp , 50 * temp)   
    ctx.lineTo(740 * temp  , 50 * temp)
    //右上角
    ctx.arc(750  * temp , 110  * temp, 60  * temp , 1.5  * Math.PI,  1 * Math.PI , true)
    //右边线和右下角
    ctx.lineTo(690*temp,1000*temp)

    ctx.arc(630 * temp, 1000 * temp, 60  * temp ,  0* Math.PI,   0.5* Math.PI , false)
    //下部线
    ctx.lineTo(0*temp,1060*temp)
    //左下角
    ctx.arc(0*temp,1000*temp , 60 *temp ,1.5* Math.PI,2* Math.PI,true  )
    //左边线和左上角
    ctx.lineTo(60 * temp , 110* temp)
    ctx.arc(120 * temp ,110  * temp , 60  * temp ,1 * Math.PI ,1.5 * Math.PI  )
    
    ctx.fill()
    ctx.stroke()
    ctx.draw()
  },
  choosePage(e){
    let num = e.currentTarget.dataset.text
    let temp =[]
    temp[num-1] = 1
    let list=[]
    for(let i=(num-1)*3;i<num*3;i++){
      if (this.data.list[i]) {
        list.push(this.data.list[i])
      }else{
        listpush({})
      }
      
    }
    this.setData({
      examList:list,
      pageTemp:temp
    })
  }


 

})