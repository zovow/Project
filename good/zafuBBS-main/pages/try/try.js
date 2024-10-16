// pages/test/test.js
Page({
    data: {
      message: '这是测试页面'
    },
  
    onLoad: function (options) {
      // 页面加载时执行的函数
      console.log('测试页面已加载');
    },
  
    onReady: function () {
      // 页面初次渲染完成时执行的函数
    },
  
    onShow: function () {
      // 页面显示时执行的函数
    },

    goBack: function() {
      wx.navigateBack({
        delta: 1
      })
    }
  })
