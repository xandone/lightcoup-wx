// pages/main/main.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rentList: [],
    banner: [],
    page: 1,
    size: 10,
    hasMore: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        banner: ['http://www.xandone.pub/1576561266509', 'http://www.xandone.pub/1576557100935',
          'http://www.xandone.pub/1587056505085'
        ]
      }),
      this.getRoomList()
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
    this.getRoomList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getRoomListMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getRoomList() {
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getRoomList(this.data.page, this.data.size)
      .then(rep => {
        this.data.rentList = [];
        this.setData({
          rentList: this.data.rentList.concat(rep.data),
          hasMore: this.data.rentList.length==rep.total
        });
        wx.hideLoading()
      }).then(() => {
        wx.stopPullDownRefresh()
      }).catch(e => {
        wx.hideLoading()
      })
  },

  getRoomListMore() {
    if (!this.data.hasMore) {
      return;
    }
    wx.showLoading({
      title: '加载中...',
    })
    return app.rent.getRoomList(this.data.page++, this.data.size)
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

  go2details: function (e) {
    const item = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: "../rentdetails/rentdetails?item=" + item
    })
  }
})