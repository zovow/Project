Page({
  data: {
    inputText: '', // 输入框中的文本
    navH: 30,     // 导航栏高度
    imageList: [], // 用于存储选择的图片
    anonymous: false, // 匿名发布状态
    agreeToTerms: true, // 默认勾选条款
    publishSuccess: false, // 发布成功状态
  },

  // 处理输入框变化
  handleInputChange(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  // 处理条款同意的变化
  toggleAgreeToTerms(e) {
    console.log('勾选框值:', e.detail.value); // 输出勾选框的值
    // 由于条款是强制勾选，不能更改此状态
    this.setData({
      agreeToTerms: true // 确保条款始终为勾选状态
    });
  },

  // 处理发布按钮点击
  handlePublish() {
    // 条款始终是勾选的，因此直接进行发布
    if (this.data.inputText.trim()) {
      let app = getApp();
      app.globalData.publishedTexts.push(this.data.inputText);
      
      // 清空输入框
      this.setData({
        inputText: '',
        imageList: [], // 发布后清空图片列表
        publishSuccess: true // 发布成功状态
      });

      // 提示用户发布成功
      wx.showToast({
        title: '发布成功',
        icon: 'success'
      });

      // 跳转到主页
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/index/index'
        });
      }, 1000); // 1000毫秒 = 1秒
    }  else {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
    }
  },

  handleCancel() {
    // 清空数据
    this.setData({
      inputText: '',
      imageList: [],
      agreeToTerms: true // 保持条款勾选状态
    });

    // 跳转到主页
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
});
