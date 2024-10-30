// pages/article-detail/article-detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    currentTime: '', // 用于存储当前时间
    testImage:[
      'https://fishei.cn/static/pic/404.jpg',
      'https://fishei.cn/static/pic/500.jpg',
      'https://fishei.cn/static/pic/404.jpg',
      'https://fishei.cn/static/pic/500.jpg',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    });
    this.updateCurrentTime(); // 页面加载时更新时间
  },
  updateCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // 格式化为 "YYYY-MM-DD HH:mm"
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log("测试 console.log 是否正常"); // 打印简单的字符串

    // 更新数据
    this.setData({
      currentTime: formattedTime
    });
  },
  
  thisImage:function(e){
    let index = e.currentTarget.dataset.imageid;
    let list = this.data.testImage;
    console.log(list)
    wx.previewImage({
      urls: list,
      current: list[index]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})