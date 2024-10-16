// pages/index/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    rotationList:[
      '../../assets/images/rotation/news.jpg',
      '../../assets/images/rotation/tieba.jpg',
      '../../assets/images/rotation/2.jpg',
      '../../assets/images/rotation/tieba.jpg',
      '../../assets/images/rotation/tieba.jpg',
    ],
    swiperCurrent: 0,
    sortList:[
      {
        icon: "../../assets/images/sort/news.png",
        sortid: 1,
        text:"最新发布",
        url: "/pages/try/try"
      },{
        icon: "../../assets/images/sort/second-hand.png",
        sortid: 2,
        text:"闲置交易",
        url: "/pages/test/test"
      },{
        icon: "../../assets/images/sort/part-time-job.png",
        sortid: 3,
        text:"悬赏猎人",
        url: "/pages/test/test"
      },{
        icon: "../../assets/images/sort/found.png",
        sortid: 4,
        text:"失物招领",
        url: "/pages/test/test"
      },
    ],
    publishedTexts: [] // 用于存储在home页面显示的文本数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    });
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 从全局获取发布的文本数组并更新本地的publishedTexts
    this.setData({
      publishedTexts: getApp().globalData.publishedTexts
    });
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

  },
  //轮播图改变事件
  swiperChange: function (e) {
    if (e.detail.source === 'touch'){
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },

  // 添加新的点击处理函数
  onSortItemClick: function() {
    console.log('尝试切换到 test 页面');
    wx.switchTab({
      url: '/pages/test/test',
      success: function() {
        console.log('切换成功');
      },
      fail: function(err) {
        console.error('页面切换失败:', err);
        wx.showToast({
          title: '页面切换失败: ' + err.errMsg,
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
})
