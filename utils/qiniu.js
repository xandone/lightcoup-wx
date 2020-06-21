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

function getQiniuToken() {
  const params = {}
  return getDatas('qiniu/getToken', params)
    .then(rep => rep.data)
}

module.exports={
  getQiniuToken
}
