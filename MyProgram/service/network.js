export default function request(opt){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'http://localhost:3000'+opt.url , 
      method: opt.method || 'get',
      data:opt.data||{},
      success:resolve,
      fail:reject
    })
  })
}