// const URL = 'https://xandone.pub/sharerent';
const URL = 'http://localhost/sharerent';

function getDatas(path, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: URL + `/${path}`,
      data: Object.assign({}, params),
      header: {
        'Content-Type': 'json'
      },
      success: resolve,
      fail: reject
    })
  })
}

function getRoomList() {
  const params = {
    page: 1,
    row: 10
  }
  return getDatas('/room/roomlist', params)
    .then(rep => rep.data.data)
}

function getRoomDetails(id) {
  const params = {
    roomId: id
  }
  return getDatas('/room/roomDetails', params)
    .then(rep => rep.data.data[0])
}

function getMyRoomList() {
  const params = {
    page: 1,
    row: 10,
    openId: "1223"
  }
  return getDatas('/room/myRoomlist', params)
    .then(rep => rep.data.data)
}

function getMyCollectList() {
  const params = {
    page: 1,
    row: 10,
    openId: "1223"
  }
  return getDatas('/room/myCollectlist', params)
    .then(rep => rep.data.data)
}

module.exports = {
  getRoomList,
  getRoomDetails,
  getMyRoomList,
  getMyCollectList
}