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

function getRoomList(page, row) {
  const params = {
    page: page,
    row: row
  }
  return getDatas('/room/roomlist', params)
    .then(rep => rep.data)
}

function getRoomDetails(id) {
  const params = {
    roomId: id
  }
  return getDatas('/room/roomDetails', params)
    .then(rep => rep.data.data[0])
}

function getMyRoomList(page, row, openId) {
  const params = {
    page: page,
    row: row,
    openId: openId
  }
  return getDatas('/room/myRoomlist', params)
    .then(rep => rep.data)
}

function getMyCollectList(page, row, openId) {
  const params = {
    page: page,
    row: row,
    openId: openId
  }
  return getDatas('/room/myCollectlist', params)
    .then(rep => rep.data)
}

function getUserByJsCode(jsCode, nickname, userIcon) {
  const params = {
    jsCode: jsCode,
    nickname: nickname,
    userIcon: userIcon
  }
  return getDatas('/user/jscode/userInfo', params)
    .then(rep => rep.data.data)
}

function getUserById(openId) {
  const params = {
    openId: openId
  }
  return getDatas('/user/userInfo', params)
    .then(rep => rep.data.data)
}

module.exports = {
  getRoomList,
  getRoomDetails,
  getMyRoomList,
  getMyCollectList,
  getUserByJsCode,
  getUserById
}