// 初始化云环境
wx.cloud.init();

var app = getApp();

Page({
  data: {
    navH: 0,
    rotationList: [
      '../../assets/images/rotation/news.jpg',
      '../../assets/images/rotation/tieba.jpg',
      '../../assets/images/rotation/2.jpg',
      '../../assets/images/rotation/tieba.jpg',
      '../../assets/images/rotation/tieba.jpg'
    ],
    swiperCurrent: 0,
    sortList: [
      {
        icon: "../../assets/images/sort/news.png",
        sortid: 1,
        text: "最新发布",
        url: "/pages/try/try"
      },
      {
        icon: "../../assets/images/sort/second-hand.png",
        sortid: 2,
        text: "闲置交易",
        url: "/pages/test/test"
      },
      {
        icon: "../../assets/images/sort/part-time-job.png",
        sortid: 3,
        text: "悬赏猎人",
        url: "/pages/test/test"
      },
      {
        icon: "../../assets/images/sort/found.png",
        sortid: 4,
        text: "失物招领",
        url: "/pages/test/test"
      }
    ],
    publishedTexts: [] // 用于存储在home页面显示的文本数组
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    });
    this.loadPublishedTexts();
  },

  // 从云数据库加载已发布的文本和时间戳
  loadPublishedTexts() {
    const db = wx.cloud.database();

    // 从数据库读取帖子并按时间降序排序
    db.collection('posts').orderBy('timestamp', 'desc').get({
      success: res => {
        // 只取最近的三个帖子
        const latestPosts = res.data.slice(0, 5).map(post => ({
          text: post.text,        // 帖子文本
          images: post.images || [], // 帖子图片数组
          timestamp: post.timestamp // 帖子发布时间
        }));
        
        this.setData({
          publishedTexts: latestPosts
        });
      },
      fail: err => {
        wx.showToast({
          title: '加载失败，请重试',
          icon: 'none'
        });
      }
    });
  },

  // 生命周期函数--监听页面显示
  onShow() {
    this.loadPublishedTexts();
  },

  // 轮播图改变事件
  swiperChange: function (e) {
    if (e.detail.source === 'touch') {
      this.setData({
        swiperCurrent: e.detail.current
      });
    }
  },

  // 排序项点击事件
  onSortItemClick: function() {
    wx.switchTab({
      url: '/pages/test/test',
      success: function() {
        console.log('页面切换成功');
      },
      fail: function(err) {
        wx.showToast({
          title: '页面切换失败: ' + err.errMsg,
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
});
