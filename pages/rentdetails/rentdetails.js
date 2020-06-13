// pages/rentdetails/rentdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rentInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadRentInfo()
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
  loadRentInfo() {
    this.setData({
      rentInfo: {
        "id": 1,
        "room_images": ['http://www.xandone.pub/1576561266509', 'http://www.xandone.pub/1576557100935',
          'http://www.xandone.pub/1587056505085'
        ],
        "location": "武昌",
        "destination": "汉阳",
        "price": "1000.00",
        "title": "慢慢就会看了估计欢乐谷",
        "discrip": "美联储在声明中仍对中期经济前景做出了“相当大的风险”的评估，暗示美联储预计经济不会出现“V型”强劲复苏，也给市场传达了一种经济的不确定性。美国一季度GDP为-5%，此前多家机构预测二季度将下滑40%，如果全年是-6.5%，那么三四季度要强劲V型反转才行，并且提前是美国疫情还不会二次大规模爆发。但极力避免，或不愿看到的事情，却往往容易出现纰漏。",
        "publish_data": "2020:09:10 12:30:00",
        "wechart_num": "765478955",
        "wechart_nick": "thew show",
        "wechart_icon": "http://www.xandone.pub/1587056505085"
      }
    })
  }
})