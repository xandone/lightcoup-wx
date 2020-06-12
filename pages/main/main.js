// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupList: [],
    banner: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      coupList: [{
        "id": 1,
        "cover": "http://www.xandone.pub/1587056505085",
        "title": "德克士",
        "price": 10.00,
        "expiredDate": "2020:9:10 12:30:00",
        "distance": "300米"
      }, {
        "id": 2,
        "cover": "http://www.xandone.pub/1587056505085",
        "title": "德克士",
        "price": 10.00,
        "expiredDate": "2020:9:10 12:30:00",
        "distance": "300米"
      }, {
        "id": 3,
        "cover": "http://www.xandone.pub/1587056505085",
        "title": "德克士",
        "price": 10.00,
        "expiredDate": "2020:9:10 12:30:00",
        "distance": "300米"
      }],
      banner: ['http://www.xandone.pub/1576561266509', 'http://www.xandone.pub/1576557100935',
        'http://www.xandone.pub/1587056505085'
      ]
    })
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
    this.loadCoupList()
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


  loadCoupList() {
    wx.showLoading({
      title: '加载中..',
    })
    let that=this;
    setTimeout(function () {
      that.setData({
          coupList: [{
            "id": 1,
            "cover": "http://www.xandone.pub/1587056505085",
            "title": "德克士",
            "price": 10.00,
            "expiredDate": "2020:9:10 12:30:00",
            "distance": "300米"
          }, {
            "id": 2,
            "cover": "http://www.xandone.pub/1587056505085",
            "title": "德克士",
            "price": 10.00,
            "expiredDate": "2020:9:10 12:30:00",
            "distance": "300米"
          }, {
            "id": 3,
            "cover": "http://www.xandone.pub/1587056505085",
            "title": "德克士",
            "price": 10.00,
            "expiredDate": "2020:9:10 12:30:00",
            "distance": "300米"
          }]
        }),
        wx.hideLoading()
    }, 2000)
  }
})