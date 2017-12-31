//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
  },

  onLoad: function () {
    var that = this
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/20498459/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key'
        : 'NZ6Zt4LB=8=UAfql=ES=ohWMJfc='
      },
      success: function (res) {
        console.log(res)      //打印返回的数据
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

})
