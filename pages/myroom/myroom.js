// pages/myroom/myroom.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,
    rentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  getMyRoomList() {
    wx.showLoading({
      title: '加载中...',
    })
    this.data.rentList = [];
    return app.rent.getMyRoomList()
      .then(rep =>
        this.setData({
          rentList: this.data.rentList.concat(rep)
        }),
        wx.hideLoading()
      ).catch(e => {
        wx.hideLoading()
      })
  },

  getMyCollectList() {
    wx.showLoading({
      title: '加载中...',
    })
    this.data.rentList = [];
    return app.rent.getMyCollectList()
      .then(rep =>
        this.setData({
          rentList: this.data.rentList.concat(rep)
        }),
        wx.hideLoading()
      ).catch(e => {
        wx.hideLoading()
      })
  },
})