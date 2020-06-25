// pages/publish/publish.js

const app = getApp()
// const URL = 'https://xandone.pub/sharerent';
const URL = 'http://localhost/sharerent';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        files: [],
        qiniufiles: [],
        iosDialog2: false,
        title: "",
        descrip: "",
        price: "",
        location: "",
        destination: "",
        value: []
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
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    deleteImage: function (e) {
        this.data.files.splice(e.currentTarget.id, 1);
        this.setData({
            files: this.data.files
        })
    },

    openIOS2: function () {
        this.setData({
            iosDialog2: true
        });
    },
    close: function () {
        this.setData({
            iosDialog2: false,
        })
    },

    checkBoxChange: function (e) {
        this.setData({
            value: e.detail.value
        })
    },

    commit: function (params) {
        const that = this;
        new Promise((resolve, reject) => {
            wx.request({
                url: URL + '/room/add',
                method: "POST",
                data: params,
                success: resolve,
                fail: reject
            });
        })
    },
    /**
     * 上传图片并提交
     * @param {*} e 
     */
    submitForm: function (e) {
        const title = this.data.title
        const descrip = this.data.descrip
        const price = this.data.price
        const location = this.data.location
        const destination = this.data.destination
        const that = this;
        const isTitleEmpty = app.util.isEmpty(title);
        const isDescripEmpty = app.util.isEmpty(descrip);
        const isPriceEmpty = app.util.isEmpty(price);
        const isLocationEmpty = app.util.isEmpty(location);
        const isDestinationEmpty = app.util.isEmpty(destination);

        if (isTitleEmpty) {
            app.util.showTipToast("请填写标题");
            return;
        }

        if (isPriceEmpty) {
            app.util.showTipToast("请填写价格");
            return;
        }
        if (isLocationEmpty) {
            app.util.showTipToast("请填写所在地");
            return;
        }
        if (isDestinationEmpty) {
            app.util.showTipToast("请填写目的地");
            return;
        }
        if (isDescripEmpty) {
            app.util.showTipToast("请填写详情");
            return;
        }
        if (this.data.files == null || this.data.files.length == 0) {
            app.util.showTipToast("请上传至少1张图片");
            return;
        }
        if (this.data.value.length == 0) {
            app.util.showTipToast("请勾选并同意相关条例");
            return;
        }

        if (title && descrip) {
            wx.showLoading({
                title: '提交中...',
                mask: true
            })

            // 将选择的图片组成一个Promise数组，准备进行并行上传
            const arr = this.data.files.map(path => {
                return new Promise((resolve, reject) => {
                    wx.uploadFile({
                        url: 'https://up-z2.qiniup.com',
                        filePath: path,
                        name: 'file',
                        formData: {
                            'userId': 1212,
                            'token': app.globalData.qiniutoken,
                            'key': String(new Date().getTime()) //文件名
                        },
                        success: resolve,
                        fail: reject
                    })
                })
            })

            // 开始并行上传图片
            Promise.all(arr).then(res => {
                // 上传成功，获取这些图片在服务器上的地址，组成一个数组
                return res.map(item => "http://www.xandone.pub/" + JSON.parse(item.data).key)
            }).catch(err => {
                console.log(">>>> upload images error:", err)
            }).then(urls => {
                console.log(urls);
                // 调用保存问题的后端接口
                return that.commit({
                    userId: 123,
                    title: title,
                    descrip: descrip,
                    price: price,
                    location: location,
                    destination: destination,
                    images: JSON.stringify(urls)
                })
            }).then(res => {
                wx.hideLoading();
                app.util.showTipToast("提交成功");

                const pages = getCurrentPages();
                const prePage = pages[pages.length - 2];
                prePage.setData({
                    pubCount: prePage.data.pubCount + 1
                })
            }).catch(err => {
                console.log(">>>error:", err)
            }).then(() => {
                wx.hideLoading();
                wx.navigateBack();
            })
        }
    }
})