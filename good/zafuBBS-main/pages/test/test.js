// test.js
Page({
  data: {
    inputText: '', // 输入框中的文本
    navH: 0,       // 导航栏高度

  },

  // 处理输入框变化
  handleInputChange(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  // 处理发布按钮点击
  handlePublish() {
    // 如果输入文本不为空，将其添加到全局的 publishedTexts 数组中
    if (this.data.inputText.trim()) {
      let app = getApp();
      app.globalData.publishedTexts.push(this.data.inputText);
      
      // 清空输入框
      this.setData({
        inputText: ''
      });

      // 跳转到 home 页面
      wx.switchTab({
        url: '/pages/home/home'
      });
    } else {
      // 如果输入为空，给出提示
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
    }
  }
})
