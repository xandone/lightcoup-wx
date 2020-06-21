// pages/main/main.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rentList: [],
    banner: []

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
    this.data.rentList=[];
    return app.rent.getRoomList()
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