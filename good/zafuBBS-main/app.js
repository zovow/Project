//app.js
App({
  globalData: {
    userInfo: null,
    navHeight: 0,
    publishedTexts: [] ,// 全局存储发布的文本数组
    tags: [{
      text:"表白墙"
    },{
      text:"二手交易"
    }],
    meta: {}
  },
  onLaunch: function (t) {
    // 获取顶部栏信息
    const windowInfo = wx.getWindowInfo();
    
    // 导航栏的高度一般可以通过状态栏高度和标题栏高度计算得到
    const statusBarHeight = windowInfo.statusBarHeight; // 状态栏高度
    const navHeight = statusBarHeight; 
    
    // 将导航高度保存到全局数据
    this.globalData.navHeight = navHeight;
    //console.log("导航高度:", navHeight);
  },
  
  
})