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
        text:"最新发布"
      },{
        icon: "../../assets/images/sort/second-hand.png",
        sortid: 2,
        text:"闲置交易"
      },{
        icon: "../../assets/images/sort/part-time-job.png",
        sortid: 3,
        text:"任务悬赏"
      },{
        icon: "../../assets/images/sort/found.png",
        sortid: 4,
        text:"失物招领"
      },
    ]
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

  },
  //轮播图改变事件
  swiperChange: function (e) {
    if (e.detail.source === 'touch'){
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },
})