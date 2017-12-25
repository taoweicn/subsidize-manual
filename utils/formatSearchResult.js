module.exports = function (data, searchKeywords) {
  let searchResultList = [], isSearched
  data.list.forEach(dataItem => {
    dataItem.content.forEach((item, index) => {
      isSearched = false
      let result = {
        title: [{
          content: item.title,
          keywords: ''
        }],
        text: [{
          content: item.content,
          keywords: ''
        }],
        type: dataItem.type,
        introduction: dataItem.introduction,
        toView: 'id' + index
      }
      if (item.title.indexOf(searchKeywords) > -1) {
        result.title = []
        item.title.split(searchKeywords).forEach(str => {
          result.title.push({
            content: str,
            keywords: searchKeywords
          })
        })
        result.title[result.title.length - 1].keywords = ''
        isSearched = true
      }
      if (item.text.indexOf(searchKeywords) > -1) {
        result.text = []
        item.text.split(searchKeywords).forEach(str => {
          result.text.push({
            content: str,
            keywords: searchKeywords
          })
        })
        result.text[result.text.length - 1].keywords = ''
        isSearched = true
      }
      if (isSearched) {
        searchResultList.push(result)
      }
    })
  })
  return searchResultList
}