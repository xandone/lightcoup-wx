const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function isEmpty(obj){
  if(typeof obj == "undefined" || obj == null || obj == ""){
      return true;
  }else{
      return false;
  }
}

function showTipToast(tip){
  wx.showToast({
      title: tip,
      icon: "none",
      duration: 2000
    })
}

module.exports = {
  formatTime: formatTime,
  isEmpty,
  showTipToast
}

