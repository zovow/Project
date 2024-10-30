// 初始化云环境
wx.cloud.init();

Page({
  data: {
    inputText: '', // 输入框中的文本
    navH: 30,     // 导航栏高度
    imageList: [], // 用于存储选择的图片
    anonymous: false, // 匿名发布状态
    agreeToTerms: true, // 默认勾选条款
    publishSuccess: false // 发布成功状态
  },
  chooseImage() {
    if (this.data.imageList.length >= 3) {
      wx.showToast({
        title: '已达到图片上限',
        icon: 'none'
      });
      return;
    }
    
    wx.chooseImage({
      count: 3 - this.data.imageList.length, // 每次最多选择三张
      sizeType: ['compressed'], // 使用压缩图
      sourceType: ['album'], // 仅从相册选择
      success: res => {
        const newImages = res.tempFilePaths;
  
        // 确保总图片数量不超过三张
        const totalImages = [...this.data.imageList, ...newImages].slice(0, 3);
        this.setData({
          imageList: totalImages
        });
      }
    });
  },
  
  deleteImage(e) {
    const index = e.currentTarget.dataset.index; // 获取图片的索引
    const newImageList = [...this.data.imageList]; // 创建 imageList 的副本
    newImageList.splice(index, 1); // 删除对应索引的图片
    this.setData({
      imageList: newImageList
    });
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
    this.setData({
      agreeToTerms: true // 确保条款始终为勾选状态
    });
  },

  // 格式化时间
  formatTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  },

    chooseImage() {
    wx.chooseImage({
      count: 3 - this.data.imageList.length, // 限制最多3张
      sizeType: ['compressed'], // 使用压缩图
      sourceType: ['album'], // 仅从相册选择
      success: res => {
        // 合并新选择的图片到 imageList 中
        const newImages = res.tempFilePaths;
        this.setData({
          imageList: [...this.data.imageList, ...newImages]
        });
      }
    });
  },

  // 处理发布按钮点击
  handlePublish() {
    // 条款始终是勾选的，因此直接进行发布
    if (this.data.inputText.trim()) {
      const db = wx.cloud.database();
      const currentDate = new Date();
      const formattedTime = this.formatTime(currentDate); // 格式化的发布时间

      // 将帖子数据添加到云数据库
      db.collection('posts').add({
        data: {
          text: this.data.inputText,
          timestamp: formattedTime, // 存储格式化后的时间字符串
          images: this.data.imageList,
          anonymous: this.data.anonymous
        },
        success: res => {
          this.setData({
            inputText: '',
            imageList: [],
            publishSuccess: true
          });

          wx.showToast({
            title: '发布成功',
            icon: 'success'
          });

          // 跳转到首页
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index'
            });
          }, 1000); // 1秒延迟
        },
        fail: err => {
          wx.showToast({
            title: '发布失败，请重试',
            icon: 'none'
          });
        }
      });
    } else {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
    }
  },

  // 处理取消按钮点击
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
  }
});
