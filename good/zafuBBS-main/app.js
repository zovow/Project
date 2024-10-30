// app.js
App({
  globalData: {
    userInfo: null,          // 用户信息
    navHeight: 0,            // 导航栏高度
    publishedTexts: [],      // 全局存储发布的文本数组
    tags: [                   // 标签数组
      { text: "表白墙" },
      { text: "二手交易" }
    ],
    meta: {}                 // 其他元数据
  },

  onLaunch() {
    // 检查云开发是否可用
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      // 初始化云开发
      wx.cloud.init({
        env: 'ecnu-22-5-4gvdjed17bba321b',  // 替换为您的云环境 ID
        traceUser: true,
      });
    }

    // 获取顶部栏信息
    const windowInfo = wx.getWindowInfo();
    const statusBarHeight = windowInfo.statusBarHeight; // 状态栏高度
    const navHeight = statusBarHeight; 

    // 将导航高度保存到全局数据中
    this.globalData.navHeight = navHeight;

    // 调试输出导航高度
    console.log("导航高度:", navHeight);
  }
});
