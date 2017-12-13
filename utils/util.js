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

// 搜索一个数组中含有指定键名的某一项
const searchKey = (key , name, array) => {
  let result = '';
  array.forEach(item => {
    if (item[key] === name) {
      result = item
    }
  })
  return result
}

module.exports = {
  formatTime: formatTime,
  searchKey: searchKey
}
