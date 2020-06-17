// pages/publish/publish.js

const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    iosDialog2:false,
    title:"",
    descrip:"",
    value:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.setData({
                files: that.data.files.concat(res.tempFilePaths)
            });
        }
    })
},
previewImage: function(e){
    wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
    })
},
deleteImage:function (e) {
    this.data.files.splice(e.currentTarget.id,1);
    console.log(this.data.files);
    this.setData({
        files:this.data.files
    })
},

openIOS2: function() {
    this.setData({
        iosDialog2: true
    });
},
close: function () {
    this.setData({
        iosDialog2: false,
    })
},

checkBoxChange:function(e){
    this.setData({
        value:e.detail.value
    })
},

commit:function(e){
    let isTitleEmpty=app.util.isEmpty(this.data.title);
    let isDescripEmpty=app.util.isEmpty(this.data.descrip);
    if(isTitleEmpty){
        app.util.showTipToast("请填写标题");
        return ;
    }
    if(isDescripEmpty){
        app.util.showTipToast("请填写详情");
        return;
    }
    if(this.data.value.length==0){
        app.util.showTipToast("请勾选并同意相关条例");
    }
}
})