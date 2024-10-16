// home.js
Page({
  data: {
    publishedTexts: [] // 用于存储在home页面显示的文本数组
  },

  onShow() {
    // 从全局获取发布的文本数组并更新本地的publishedTexts
    this.setData({
      publishedTexts: getApp().globalData.publishedTexts
    });
  }
})
