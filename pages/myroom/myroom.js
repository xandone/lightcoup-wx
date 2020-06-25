// pages/myroom/myroom.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rentUserBean: {},
    type: 1,
    rentList: [],
    page: 1,
    size: 10,
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.rentUserBean) {
      this.setData({
        rentUserBean: app.globalData.rentUserBean
      })
    } else {
      app.rent.getUserByJsCode(app.globalData.jsCode, app.globalData.userInfo.nickName,
          app.globalData.userInfo.avatarUrl)
        .then(res => {
          app.globalData.rentUserBean = res[0];
          this.setData({
            rentUserBean: app.globalData.rentUserBean
          })
        })
    }

    this.data.type = options.type;
    const type = options.type;
    if (type == 1) {
      this.getMyRoomList()
    } else if (type == 2) {
      this.getMyCollectList()
    }
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
    const type = this.data.type;
    if (type == 1) {
      wx.setNavigationBarTitle({
        title: '我的发布'
      })
      this.getMyRoomList()
    } else if (type == 2) {
      wx.setNavigationBarTitle({
        title: '我的收藏'
      })
      this.getMyCollectList()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const type = this.data.type;
    if (type == 1) {
      this.getMyRoomListMore()
    } else if (type == 2) {
      this.getMyCollectListMore()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getMyRoomList() {
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getMyRoomList(this.data.page, this.data.size,
        this.data.rentUserBean.userOpenid)
      .then(rep => {
        this.data.rentList = [];
        this.setData({
          rentList: this.data.rentList.concat(rep.data),
          hasMore: this.data.rentList.length == rep.total
        });
        wx.hideLoading()
      }).then(() => {
        wx.stopPullDownRefresh()
      }).catch(e => {
        wx.hideLoading()
      })
  },

  getMyRoomListMore() {
    if (!this.data.hasMore) {
      return;
    }
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getMyRoomList(this.data.page++, this.data.size,
        this.data.rentUserBean.userOpenid)
      .then(rep => {
        this.setData({
          rentList: this.data.rentList.concat(rep.data),
          hasMore: this.data.rentList.length == rep.total
        });
        wx.hideLoading()
      }).then(() => {
        wx.stopPullDownRefresh()
      }).catch(e => {
        wx.hideLoading()
        this.data.page--;
      })
  },

  getMyCollectList() {
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getMyCollectList(this.data.page, this.data.size,
        this.data.rentUserBean.userOpenid)
      .then(rep => {
        this.data.rentList = [];
        this.setData({
          rentList: this.data.rentList.concat(rep.data),
          hasMore: this.data.rentList.length == rep.total
        });
        wx.hideLoading()
      }).then(() => {
        wx.stopPullDownRefresh()
      }).catch(e => {
        wx.hideLoading()
      })
  },

  getMyCollectListMore() {
    if (!this.data.hasMore) {
      return;
    }
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getMyCollectList(this.data.page++, this.data.size,
        this.data.rentUserBean.userOpenid)
      .then(rep => {
        this.setData({
          rentList: this.data.rentList.concat(rep.data),
          hasMore: this.data.rentList.length == rep.total
        });
        wx.hideLoading()
      }).then(() => {
        wx.stopPullDownRefresh()
      }).catch(e => {
        wx.hideLoading()
        this.data.page--;
      })
  },
})