// pages/my/my.js

//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    rentUserBean: {},
    pubCount: 0, //已发布
    collectCount: 0 //已收藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initUser()
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

  initUser() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }

    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (app.globalData.rentUserBean) {
      this.setData({
        rentUserBean: app.globalData.rentUserBean
      })
    } else {
      app.rent.getUserInfo()
        .then(res => {
          this.globalData.rentUserBean = res[0];
          this.setData({
            rentUserBean: app.globalData.rentUserBean
          })
        })
    }
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  go2MyRoom: function (e) {
    if (!this.data.hasUserInfo) {
      app.util.showTipToast("请先登录");
      return;
    }
    wx.navigateTo({
      url: '../myroom/myroom?type=1',
    })
  },

  go2MyCollect: function (e) {
    if (!this.data.hasUserInfo) {
      app.util.showTipToast("请先登录");
      return;
    }
    wx.navigateTo({
      url: '../myroom/myroom?type=2',
    })
  },

  go2publish: function (e) {
    if (!this.data.hasUserInfo) {
      app.util.showTipToast("请先登录");
      return;
    }
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
  go2feedback: function (e) {
    if (!this.data.hasUserInfo) {
      app.util.showTipToast("请先登录");
      return;
    }
    app.util.showTipToast("开发中..");
  }
})