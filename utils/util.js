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
  searchKey: searchKey
}
